'use strict';
(() => {
  const records = window.PCTT_DATA;
  const filter = document.getElementById('filter');
  const province = document.getElementById('province');
  const select = document.getElementById('ward');
  const result = document.getElementById('result');
  const match = document.getElementById('match');
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase().trim();
  const element = (tag, text, className) => {
    const node = document.createElement(tag);
    if (text) node.textContent = text;
    if (className) node.className = className;
    return node;
  };
  const link = (label, href) => {
    const node = element('a', label);
    node.href = href; node.target = '_blank'; node.rel = 'noopener noreferrer';
    return node;
  };
  const provinces = [...new Set(records.map(row => row.province))].sort((a, b) => a.localeCompare(b, 'vi'));
  const allOption = element('option', 'Tất cả tỉnh, thành đã có hướng dẫn'); allOption.value = ''; province.append(allOption);
  provinces.forEach(name => { const option = element('option', name); option.value = name; province.append(option); });
  function render() {
    result.replaceChildren();
    const record = records.find(row => row.id === select.value);
    if (!record) {
      result.append(element('p', 'Không tìm thấy mục phù hợp. Hãy thử tên khác, đổi tỉnh/thành hoặc xóa từ khóa.', 'notice'));
      return;
    }
    const card = element('article');
    card.append(element('p', record.province, 'eyebrow'), element('h3', record.name));
    card.append(element('p', `${record.document} · ${record.date}`, 'muted'));
    card.append(element('p', record.deadline, 'deadline'));
    if (record.note) card.append(element('p', record.note));
    const accounts = record.accounts || (record.account ? [{account:record.account, payee:record.payee, bank:record.bank, pages:record.pages}] : []);
    accounts.forEach(account => {
      if (account.scope) card.append(element('p', `Phạm vi dùng tài khoản: ${account.scope}`, 'notice'));
      const list = element('dl', '', 'pctt-account');
      for (const [label, value, cls] of [
        ['Đơn vị nhận tiền', account.payee],
        ['Số tài khoản', account.account, 'account-number'],
        ['Ngân hàng / Kho bạc', account.bank]
      ]) list.append(element('dt', label), element('dd', value, cls));
      card.append(list);
      if (account.pages) card.append(element('p', `Thông tin tài khoản theo trang ${account.pages} của công văn bên dưới.`, 'muted'));
    });
    if (!accounts.length) card.append(element('p', 'Chưa có số tài khoản để hiển thị. Xem công văn và liên hệ bộ phận tiếp nhận của địa phương.', 'notice'));
    if (record.contact) card.append(element('p', `Liên hệ theo hướng dẫn: ${record.contact}`));
    const links = element('div', '', 'links');
    if (record.pdf) {
      links.append(link('Mở công văn PDF ↗', record.pdf));
      const download = link('Tải công văn', record.pdf); download.download = `${record.id}-quy-pctt-2026.pdf`; links.append(download);
    }
    if (record.source) links.append(link('Xem nguồn hướng dẫn ↗', record.source));
    (record.extraDocs || []).forEach(doc => links.append(link(`${doc.label} ↗`, doc.url)));
    card.append(links); result.append(card);
  }
  function updateOptions() {
    const previous = select.value;
    const query = normalize(filter.value);
    const found = records.filter(row => (!province.value || row.province === province.value) && normalize(`${row.province} ${row.name} ${row.document}`).includes(query));
    select.replaceChildren();
    found.forEach(row => {
      const option = element('option', `${row.province} – ${row.name}`); option.value = row.id; select.append(option);
    });
    select.disabled = !found.length;
    match.textContent = `Hiển thị ${found.length} / ${records.length} mục tra cứu tại ${provinces.length} tỉnh, thành đã có hướng dẫn.`;
    if (found.some(row => row.id === previous)) select.value = previous;
    else if (!query && !province.value) select.value = 'tay-ho';
    render();
  }
  filter.addEventListener('input', updateOptions);
  province.addEventListener('change', updateOptions);
  select.addEventListener('change', render);
  updateOptions();

  const assets = document.getElementById('total-assets');
  const calculation = document.getElementById('calc-result');
  const money = value => new Intl.NumberFormat('vi-VN', {maximumFractionDigits:0}).format(value) + ' đồng';
  document.getElementById('business-calculator').addEventListener('submit', event => {
    event.preventDefault();
    const raw = assets.value.trim();
    // Separators are accepted only as thousands groups; decimal asset amounts are not inferred.
    if (!/^(?:\d+|\d{1,3}(?:[., \u00a0]\d{3})+)$/.test(raw)) {
      assets.setAttribute('aria-invalid', 'true');
      calculation.textContent = 'Vui lòng nhập tổng tài sản là số nguyên đồng không âm, ví dụ 10.000.000.000.';
      return;
    }
    const totalAssets = Number(raw.replace(/[., \u00a0]/g, ''));
    if (!Number.isSafeInteger(totalAssets)) {
      assets.setAttribute('aria-invalid', 'true');
      calculation.textContent = 'Số tiền vượt phạm vi tính chính xác. Vui lòng kiểm tra lại số đã nhập.';
      return;
    }
    assets.removeAttribute('aria-invalid');
    const baseAmount = totalAssets * 0.0002;
    const contribution = Math.min(100000000, Math.max(500000, baseAmount));
    const note = baseAmount < 500000 ? ' Áp dụng mức tối thiểu 500.000 đồng.' : baseAmount > 100000000 ? ' Áp dụng mức tối đa 100 triệu đồng.' : '';
    calculation.textContent = `Tổng tài sản ${money(totalAssets)} × 0,02% = ${money(baseAmount)}. Khoản doanh nghiệp đóng trong năm: ${money(contribution)}.${note} Chưa gồm người lao động, truy thu và chưa áp dụng miễn, giảm; số hiển thị làm tròn đến đồng.`;
  });
})();
