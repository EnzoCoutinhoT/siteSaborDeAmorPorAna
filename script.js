    function toggleMenu() {
      const m = document.getElementById('mobileMenu');
      m.classList.toggle('open');
    }


    window.addEventListener('scroll', () => {
      document.getElementById('header').classList.toggle('scrolled', window.scrollY > 20);
    });


    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: .12 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    function abrirWhats() {
      const msg = encodeURIComponent('Olá Ana! Vi o site e gostaria de fazer uma encomenda! ');
      
      window.open('https://wa.me/5584994510940?text=' + msg, '_blank');
    }

    function abrirInstagram() {
      window.open('https://instagram.com/sabordeamorporana', '_blank');
    }

    function abrirFacebook() {
      window.open('https://www.facebook.com/sabordeamorporana', '_blank');
    }