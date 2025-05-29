<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Yvette Wieseler | Portfolio</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 0;
      background-color: #f9f9f9;
      color: #333;
    }
    header {
      background-color: #3f51b5;
      color: white;
      padding: 2rem;
      text-align: center;
    }
    nav {
      background: #eee;
      padding: 0.5rem;
      text-align: center;
    }
    nav a {
      margin: 0 1rem;
      text-decoration: none;
      color: #3f51b5;
      font-weight: bold;
    }
    .container {
      padding: 2rem;
      max-width: 900px;
      margin: auto;
    }
    h2 {
      border-bottom: 2px solid #ddd;
      padding-bottom: 0.5rem;
      margin-top: 2rem;
    }
    .project {
      margin-bottom: 2rem;
    }
    .project img {
      max-width: 100%;
      height: auto;
      border: 1px solid #ccc;
      margin-top: 0.5rem;
    }
    .resume-button {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      background-color: #3f51b5;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      margin-top: 1rem;
    }
    footer {
      text-align: center;
      padding: 2rem;
      background-color: #f0f0f0;
      color: #777;
      margin-top: 2rem;
    }
  </style>
</head>
<body>

  <header>
    <h1>Yvette Wieseler</h1>
    <p>Software Developer | Problem Solver | Team Collaborator</p>
  </header>

  <nav>
    <a href="#projects">Projects</a>
    <a href="#resume">Resume</a>
    <a href="#contact">Contact</a>
  </nav>

  <div class="container">

    <section id="projects">
      <h2>Projects</h2>

      <div class="project">
        <h3>Checkerboard Game (Team Project)</h3>
        <p>Developed a command-line checkerboard game in Java as part of a 4-person team. My contributions included move validation and turn logic. Demonstrated OOP principles and collaborative development.</p>
        <p><strong>Technologies:</strong> Java, Git, Terminal I/O</p>
        <img src="https://github.com/user-attachments/assets/df59ea0c-6219-41ae-8e63-8fc1903813d4" alt="Checkerboard terminal output">
        <p><em>Terminal output from checkerboard game.</em></p>
      </div>

      <div class="project">
        <h3>JUnit Testing Example</h3>
        <p>Example of a JUnit test case written for the checkerboard project, demonstrating test-driven development practices.</p>
        <img src="https://github.com/user-attachments/assets/8d43bbcc-ffca-45c9-9b5e-999250effd26" alt="JUnit test screenshot">
        <p><em>JUnit test case in Eclipse IDE.</em></p>
      </div>

      <div class="project">
        <h3>UML Diagrams</h3>
        <p>Created UML diagrams to document system architecture, class relationships, and object interactions for the project.</p>
        <img src="https://github.com/user-attachments/assets/35af6eb3-875c-4cab-a367-ba226fd069a9" alt="UML diagram screenshot">
        <p><em>UML class diagram used for design planning.</em></p>
      </div>
    </section>

    <section id="resume">
      <h2>Resume</h2>
      <p>Click below to view or download my resume.</p>
      <a class="resume-button" href="YvetteWieseler_Resume.pdf" target="_blank">📄 View Resume</a>
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <p>📧 <a href="mailto:yvette@example.com">yvette@example.com</a></p>
      <p>💼 <a href="https://www.linkedin.com/in/yvettewieseler/" target="_blank">LinkedIn</a></p>
    </section>

  </div>

  <footer>
    &copy; 2025 Yvette Wieseler. All rights reserved.
  </footer>

</body>
</html>
