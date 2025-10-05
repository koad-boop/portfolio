const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <h3>📞 My Contact</h3>
        <div className="contact-links">
          <p>
            <strong>✉️Email:</strong>{" "}
            <a href="mailto:komalhack143@gmail.com">komalhack143@gmail.com</a>
          </p>

          <p>
            <strong>💻GitHub:</strong>{" "}
            <a
              href="https://github.com/koad-boop"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/koad-boop
            </a>
          </p>

          <p>
            <strong>🔗LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/komal-singh-b48216268/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/komal-singh
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
