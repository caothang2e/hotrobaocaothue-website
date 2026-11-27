'use strict';
(() => {
  const records = window.PCTT_DATA;
  const filter = document.getElementById('filter');
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
  function render() {
    result.replaceChildren();
    const record = records.find(row => row.id === select.value);
    if (!record) {
      result.append(element('p', 'Không tìm thấy địa phương phù hợp. Hãy thử tên khác hoặc xóa từ khóa.', 'notice'));
      return;
    }
    const card = element('article');
    card.append(element('h3', record.name));
    card.append(element('p', `${record.document} ngày ${record.date}`, 'muted'));
    card.append(element('p', record.deadline, 'deadline'));
    if (record.note) card.append(element('p', record.note));
    if (record.account) {
      const list = element('dl', '', 'pctt-account');
      for (const [label, value, cls] of [
        ['Đơn vị nhận tiền', record.payee],
        ['Số tài khoản', record.account, 'account-number'],
        ['Ngân hàng / Kho bạc', record.bank]
      ]) list.append(element('dt', label), element('dd', value, cls));
      card.append(list);
      card.append(element('p', `Thông tin tài khoản theo trang ${record.pages} của công văn bên dưới.`, 'muted'));
    } else card.append(element('p', 'Chưa có số tài khoản để hiển thị. Xem công văn và liên hệ bộ phận tiếp nhận của địa phương.', 'notice'));
    if (record.contact) card.append(element('p', `Liên hệ theo công văn: ${record.contact}`));
    const links = element('div', '', 'links');
    links.append(link('Mở công văn PDF ↗', record.pdf));
    const download = link('Tải công văn', record.pdf);
    download.download = `${record.id}-quy-pctt-2026.pdf`;
    links.append(download); card.append(links); result.append(card);
  }
  function updateOptions() {
    const previous = select.value;
    const query = normalize(filter.value);
    const found = records.filter(row => normalize(row.name).includes(query));
    select.replaceChildren();
    found.forEach(row => {
      const option = element('option', row.name); option.value = row.id; select.append(option);
    });
    select.disabled = !found.length;
    match.textContent = `Hiển thị ${found.length} / ${records.length} phường, xã Hà Nội.`;
    if (found.some(row => row.id === previous)) select.value = previous;
    else if (!query) select.value = 'tay-ho';
    render();
  }
  filter.addEventListener('input', updateOptions);
  select.addEventListener('change', render);
  updateOptions();
})();
