export default function Profile() {
  return (
    <section className="profile-section mobile-fade-slide" style={{ padding: '40px' }}>
      <div className="profile-grid">
        <div className="profile-left">
          <img src="/profile.png" alt="Profile" className="profile-large" />
        </div>
        <div className="profile-right">
          <h1>About Me</h1>
          <p>
            Сайн байна уу! Намайг Бүрэн-Арвижихын Далай-Очир гэдэг — Full‑Stack developer. Веб хөгжүүлэлт, UI/UX,
            серверийн логик болон өгөгдлийн сантай ажиллах дуртай. Одоогоор CS-аар сурж байна
            Next.js дээр прожектууд хийж байна.
          </p>

          <h3>Highlights</h3>
          <ul>
            <li>React / Next.js дээр туршлага</li>
            <li>Node.js, Express, MongoDB</li>
            <li>Responsive UI, performance optimization</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
