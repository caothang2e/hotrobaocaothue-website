const filter = document.getElementById('filter');
const province = document.getElementById('province');
const result = document.getElementById('result');
const match = document.getElementById('match');

function element(tag, content, className) {
  const node = document.createElement(tag);
  if (content) node.textContent = content;
  if (className) node.className = className;
  return node;
}

function link([label, url, className]) {
  const node = element('a', label, className);
  node.href = url;
  if (url.startsWith('https://')) {
    node.target = '_blank';
    node.rel = 'noopener noreferrer';
  }
  return node;
}

function normalized(value) {
  return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').trim();
}

function renderProvince() {
  result.replaceChildren();
  if (!province.value) return;

  const name = province.value;
  const channels = entries[name];
  const query = 'site:gov.vn "' + name.replace(/^TP\. /, '') + '" báo cáo tiền lương thưởng Tết 2027';
  const search = ['Tìm thông báo trên các trang .gov.vn', 'https://www.google.com/search?q=' + encodeURIComponent(query)];
  result.append(element('h3', name));

  if (!channels) {
    const card = element('article');
    card.append(
      element('h4', 'Chưa xác minh hướng dẫn riêng đợt này'),
      element('p', 'Chưa có đủ căn cứ để ghi hạn, mẫu hoặc đường nộp ở đây. Hỏi Sở Nội vụ, UBND xã/phường hoặc Ban Quản lý phụ trách doanh nghiệp.'),
      element('div', '', 'links')
    );
    card.lastElementChild.append(link(search));
    result.append(card);
    return;
  }

  for (const channel of channels) {
    const card = element('article');
    const links = element('div', '', 'links');
    links.append(...channel.links.map(link));
    card.append(element('h4', channel.name), element('p', channel.deadline, 'deadline'), element('p', channel.note), links);
    result.append(card);
  }
  const source = element('div', '', 'links');
  source.append(link(name === 'Hà Nội' ? sources[2] : sources[3]), link(search));
  result.append(source);
}

function renderOptions() {
  const previous = province.value;
  const query = normalized(filter.value);
  const matching = provinces.filter(name => normalized(name).includes(query));
  const prompt = element('option', matching.length ? 'Chọn một tỉnh, thành' : 'Không tìm thấy tỉnh, thành');
  prompt.value = '';
  province.replaceChildren(prompt);
  for (const name of matching) {
    const option = element('option', name);
    option.value = name;
    province.append(option);
  }
  province.value = matching.includes(previous) ? previous : (matching.length === 1 ? matching[0] : '');
  province.disabled = matching.length === 0;
  match.textContent = query ? matching.length + ' tỉnh, thành phù hợp.' : '';
  renderProvince();
}

const documented = Object.keys(entries).length;
document.getElementById('coverage').textContent = `${provinces.length} tỉnh, thành để tra cứu · ${documented} có hướng dẫn được dẫn nguồn · ${provinces.length - documented} chưa xác minh · Rà soát ${checkedOn}`;
document.getElementById('central').append(...central.map(link));
const sourceList = document.getElementById('source-list');
for (const source of sources) {
  const item = element('li');
  item.append(link(source));
  sourceList.append(item);
}
filter.addEventListener('input', renderOptions);
province.addEventListener('change', renderProvince);
renderOptions();
