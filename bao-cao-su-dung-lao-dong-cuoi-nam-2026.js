const filter = document.getElementById('filter');
const province = document.getElementById('province');
const match = document.getElementById('match');
const result = document.getElementById('result');
const directory = document.getElementById('labor-directory-list');

function element(tag, value, className) {
  const node = document.createElement(tag);
  if (value) node.textContent = value;
  if (className) node.className = className;
  return node;
}

function externalLink([label, href, className]) {
  const node = element('a', label, className);
  node.href = href;
  node.target = '_blank';
  node.rel = 'noopener noreferrer';
  return node;
}

function normalize(value) {
  const plain = value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd').trim().replace(/^(?:tp\.\s*|(?:tp|tinh|thanh pho)\s+)/, '');
  return /^(?:tp)?hcm$/.test(plain) ? 'ho chi minh' : plain;
}

function provinceLabel(name) {
  return laborCities.includes(name) ? 'TP. ' + name : name;
}

function contactCard(name, title) {
  const card = element('article');
  card.append(element('h4', title));
  const email = laborEmails[name];
  const emailLine = element('p', 'Email liên hệ: ');
  const emailLink = element('a', email);
  emailLink.href = 'mailto:' + email;
  emailLine.append(emailLink);
  if (name === 'Lào Cai') emailLine.append(' (danh bạ trước sáp nhập, gọi xác nhận trước khi dùng)');
  card.append(emailLine);
  for (const [address, ...numbers] of laborContacts[name]) {
    card.append(element('p', address));
    if (numbers.length) {
      const links = element('div', '', 'links');
      for (const number of numbers) {
        const phone = element('a', 'Gọi ' + number);
        phone.href = 'tel:' + number.replace(/\D/g, '');
        links.append(phone);
      }
      card.append(links);
    }
  }
  return card;
}

function renderProvince() {
  result.replaceChildren();
  if (!province.value) return;

  const name = province.value;
  const channels = laborEntries[name];
  result.append(element('h3', provinceLabel(name)));

  if (channels) {
    for (const channel of channels) {
      const card = element('article');
      const links = element('div', '', 'links');
      links.append(...channel.links.map(externalLink));
      card.append(element('h4', channel.name), element('p', channel.deadline, 'deadline'),
        element('p', channel.note), links);
      result.append(card);
    }
  }

  const general = element('article');
  general.append(
    element('h4', 'Gửi bản scan và nộp bản giấy'),
    element('p', 'Hạn chung trước ngày 05/12/2026', 'deadline'),
    element('p', 'Nếu nộp bản giấy, xác nhận hộp thư tiếp nhận trước khi gửi bản scan PDF. Sau đó gửi bản giấy Mẫu 01/PLI về đúng bộ phận của Sở Nội vụ.')
  );
  result.append(general, contactCard(name, 'Email, địa chỉ và điện thoại Sở Nội vụ'));
}

function renderOptions() {
  const previous = province.value;
  const query = normalize(filter.value);
  const matching = laborProvinces.filter(name => normalize(name).includes(query));
  const prompt = element('option', matching.length ? 'Chọn một tỉnh, thành' : 'Không tìm thấy tỉnh, thành');
  prompt.value = '';
  const options = matching.map(name => {
    const option = element('option', provinceLabel(name));
    option.value = name;
    return option;
  });
  province.replaceChildren(prompt, ...options);
  province.value = matching.includes(previous) ? previous : (matching.length === 1 ? matching[0] : '');
  province.disabled = matching.length === 0;
  match.textContent = query ? matching.length + ' tỉnh, thành phù hợp.' : '';
  renderProvince();
}

const sourced = Object.keys(laborEntries).length;
document.getElementById('coverage').textContent =
  `${laborProvinces.length} tỉnh, thành để tra cứu · ${sourced} tỉnh, thành có thông tin địa phương · Rà soát 17/11/2026`;
directory.append(...laborProvinces.map(name => contactCard(name, provinceLabel(name))));
filter.addEventListener('input', renderOptions);
province.addEventListener('change', renderProvince);
renderOptions();
