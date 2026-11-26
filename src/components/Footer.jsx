const footerLinks = ['About Us', 'Contact', 'Terms of Service', 'Privacy Policy'];

const socialLinks = [
  { name: 'X (Twitter)', url: 'https://x.com', image: 'twitter.svg' },
  { name: 'Instagram', url: 'https://www.instagram.com', image: 'instagram.svg' },
  { name: 'Facebook', url: 'https://www.facebook.com', image: 'facebook.svg' },
  { name: 'TikTok', url: 'https://www.tiktok.com', image: 'tiktok.svg' },
];

function Footer() {
  return (
    <footer className="mt-30 bg-paper max-[600px]:mt-25">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 pb-11 max-[600px]:px-4 max-[600px]:pb-12">
        <div className="grid w-full grid-cols-4 max-[600px]:grid-cols-2 max-[600px]:gap-y-6">
          {footerLinks.map((item) => (
            <span key={item} className="text-center text-base leading-6 text-muted" title="Informasi belum tersedia dalam demo ini">{item}</span>
          ))}
        </div>
        <div className="flex items-center gap-4" aria-label="Media sosial">
          {socialLinks.map(({ name, url, image }) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={`Kunjungi ${name}`} className="social-link flex items-center justify-center">
              <img src={`/images/${image}`} alt="" width="24" height="24" className="h-6 w-6" />
            </a>
          ))}
        </div>
        <p className="flex flex-wrap items-center justify-center gap-1.5 text-center text-base leading-6 text-muted">
          <img src="/images/logo-nexxatech.png" alt="" width="25" height="20" className="w-6.25" />
          <span className="inline-flex flex-wrap items-center justify-center gap-1">© 2026
            <img src="/images/wordmark-nexxatech.png" alt="NexxaTech" width="84" height="12" className="inline-block w-21" />.
            All rights reserved.
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
