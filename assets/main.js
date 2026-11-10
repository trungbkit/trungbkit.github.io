(function () {
  var root = document.documentElement;

  function store(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch (e) { return null; }
  }

  /* ---------- Theme ---------- */
  var themeBtn = document.querySelector('.theme');
  themeBtn.addEventListener('click', function () {
    var current = root.dataset.theme ||
      (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var next = current === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    store('theme', next);
  });

  /* ---------- Language ---------- */
  var vi = {
    skip: 'Bỏ qua, xem dự án',
    theme: 'Đổi giao diện sáng/tối',
    hello: 'Chào, tôi là Trung.',
    lede: 'Tôi làm công cụ giúp làm việc với Git bớt rườm rà, và một dự án đưa chữ Nôm trở lại màn hình.',
    sub: 'Tôi thích ứng dụng local-first, giao diện nói rõ nó sắp làm gì, và AI chỉ lên tiếng khi bạn cần.',
    ctaGithub: 'Theo dõi trên GitHub',
    workTitle: 'Dự án',
    ixResty: 'Sắp ra mắt',
    ixKaren: 'Git client cho desktop, chạy hoàn toàn trên máy bạn',
    ixSmart: 'Từ working tree dở dang tới pull request đã mở',
    ixNom: 'Tiếng Việt, viết bằng chữ Nôm',

    restyTag: 'Sắp ra mắt. Hiện vẫn nằm trên branch riêng, chưa được merge.',
    restyNote: 'Theo dõi GitHub để biết khi nào nó lên sóng.',

    karenTag: 'Git client cho desktop, chạy hoàn toàn trên máy bạn. Không tài khoản, không cloud, không license.',
    karen1: 'Commit graph nhanh với cách xếp lane riêng, tìm theo message, tác giả, SHA, đường dẫn file hoặc nội dung.',
    karen2: 'Stage hoặc bỏ thay đổi theo file, theo hunk hay từng dòng. Có interactive rebase và công cụ merge ba chiều.',
    karen3: 'Nút Undo sau mọi thao tác dễ mất dữ liệu, cùng màn hình reflog để quay về bất kỳ trạng thái nào trước đó.',
    karen4: 'AI tuỳ chọn, dùng key của bạn: viết commit message, giải quyết conflict, review pull request, tóm tắt commit.',
    builtWith: 'Xây bằng',
    runsOn: 'Chạy trên',
    download: 'Tải Karen',
    source: 'Xem mã nguồn',

    smartTag: 'Một lệnh duy nhất, từ working tree đang dở dang tới các pull request đã mở.',
    smart1: 'Đọc diff để viết commit message theo Conventional Commits, rồi commit và push.',
    smart2: 'Mở pull request tới từng branch đích, tiêu đề được viết từ toàn bộ diff so với branch đó.',
    smart3: 'Chạy với Claude, OpenAI hoặc Gemini, có key nào dùng key đó.',
    smart4: 'Bước nào không có việc thì tự bỏ qua. Flag chỉ dùng để bớt bước.',
    smartStack: 'Node.js không phụ thuộc thư viện nào, cùng gh CLI',
    install: 'Cài Smart Commit',
    runAgain: 'Chạy lại',

    live: 'đang chạy',
    nomTag: 'Viết tiếng Việt bằng chữ Nôm, thứ chữ ông cha ta dùng suốt nhiều thế kỷ.',
    nom1: 'Gõ một câu, nhận gợi ý chữ Nôm cho từng âm tiết. Muốn đổi chữ nào cũng được.',
    nom2: 'Từ điển 16.615 chữ, 6.281 âm đọc và 209 bộ thủ, nguồn nào cũng ghi rõ.',
    nom3: 'Phân tích cho thấy phần nào của chữ gợi nghĩa, phần nào gợi âm.',
    nom4: 'Trò chơi để học: đoán chữ mỗi ngày, ghép chữ và làm thiệp thư pháp.',
    dataFrom: 'Dữ liệu từ',
    openNom: 'Mở VietNôm',

    aboutTitle: 'Về tôi',
    about1: 'Tôi viết những công cụ mà chính mình muốn dùng: script nhỏ bớt đi một bước mỗi ngày, và một ứng dụng khi script không còn đủ. Gần đây là trải nghiệm làm việc với Git, AI hỗ trợ mà không lấn át, và đưa di sản tiếng Việt lên web.',
    languages: 'Ngôn ngữ',
    tools: 'Công cụ',
    aiApis: 'API của Claude, OpenAI và Gemini',

    root: 'Commit đầu tiên, ngày 22 tháng 12 năm 2016.',
    footNote: 'Trang này viết bằng HTML và CSS thuần, chạy trên GitHub Pages.',
    footGithub: 'github.com/trungbkit'
  };

  var textNodes = document.querySelectorAll('[data-i18n]');
  var labelNodes = document.querySelectorAll('[data-i18n-label]');
  var en = {};
  textNodes.forEach(function (el) { en[el.dataset.i18n] = el.textContent; });
  labelNodes.forEach(function (el) { en[el.dataset.i18nLabel] = el.getAttribute('aria-label'); });

  var langBtns = document.querySelectorAll('[data-lang]');

  function setLang(lang) {
    var dict = lang === 'vi' ? vi : en;
    textNodes.forEach(function (el) {
      var v = dict[el.dataset.i18n];
      if (v != null) el.textContent = v;
    });
    labelNodes.forEach(function (el) {
      var v = dict[el.dataset.i18nLabel];
      if (v != null) el.setAttribute('aria-label', v);
    });
    langBtns.forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
    root.lang = lang;
    store('lang', lang);
  }

  langBtns.forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.lang); });
  });

  var saved = store('lang');
  var initial = saved || ((navigator.language || '').toLowerCase().indexOf('vi') === 0 ? 'vi' : 'en');
  if (initial === 'vi') setLang('vi');

  /* ---------- Karen: show the latest release tag ---------- */
  var tags = document.querySelectorAll('.karen-tag');
  if (tags.length && window.fetch) {
    fetch('https://api.github.com/repos/trungbkit/git-karen/releases/latest')
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        if (d && d.tag_name) tags.forEach(function (t) { t.textContent = d.tag_name; });
      })
      .catch(function () {});
  }

  /* ---------- Lanes draw as each section arrives ---------- */
  var rows = document.querySelectorAll('.row');
  var hero = document.querySelector('.hero');
  var calm = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Smart Commit: replay the run ---------- */
  var term = document.querySelector('.term');
  var lines = term ? term.querySelectorAll('.ln') : [];
  var timers = [];
  function play() {
    timers.forEach(clearTimeout);
    timers = [];
    term.classList.add('playing');
    lines.forEach(function (l, i) {
      l.classList.remove('on');
      timers.push(setTimeout(function () { l.classList.add('on'); }, 300 + i * 380));
    });
  }
  var replay = document.querySelector('.replay');
  if (replay && term) replay.addEventListener('click', play);

  if (!('IntersectionObserver' in window)) {
    rows.forEach(function (r) { r.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        io.unobserve(e.target);
        if (e.target === hero) setTimeout(function () { hero.classList.add('done'); }, 1600);
        if (!calm && term && e.target.contains(term)) play();
      });
    }, { rootMargin: '0px 0px -12% 0px' });
    rows.forEach(function (r) { io.observe(r); });
  }
})();
