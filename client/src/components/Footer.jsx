import React from "react";

function Footer() {
  return (
    <footer className="fixed bottom-0 w-full flex-shrink-0">
      <div className="flex flex-col items-center justify-center bg-green text-white h-36 mb-auto">
        <div className="flex justify-center gap-4">
          <a href="https://www.instagram.com/all_caked_up_bytrinity/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
              alt="Instagram"
              className="h-6 w-6"
            />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100071444614424">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384053.png"
              alt="Facebook"
              className="h-6 w-6"
            />
          </a>
        </div>
        <div className="text-center">
          <p>Contact us!</p>
          <p>allcakedup.bytrinity@gmail.com</p>
          <p>(620) 263-6950</p>
        </div>
        <h2>🎂All Caked Up🍑</h2>

        <p>© 2023 All Caked Up. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
