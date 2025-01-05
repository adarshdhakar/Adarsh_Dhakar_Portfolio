import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <br />
      <br />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">My Mission</h2>
          <p>
            As a passionate software engineer, my mission is to leverage technology to solve real-world problems and create innovative solutions. I strive to build applications that are not only functional but also user-friendly, scalable, and impactful. Through continuous learning and growth, I aim to contribute to projects that make a positive difference in people's lives.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">My Vision</h2>
          <p>
            My vision is to become a leading software engineer who specializes in full-stack development and problem-solving. I aspire to work on challenging projects that push the boundaries of technology, collaborate with like-minded individuals, and contribute to the open-source community. I aim to develop solutions that enhance both personal and professional communication, as well as improve business operations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Core Values</h2>
          <ul className="list-disc pl-6">
            <li><strong>Innovation:</strong> I am always exploring new technologies and methods to create better solutions.</li>
            <li><strong>Integrity:</strong> I believe in transparency, honesty, and taking responsibility for my work.</li>
            <li><strong>Collaboration:</strong> I enjoy working with diverse teams to achieve shared goals and learn from others.</li>
            <li><strong>Continuous Learning:</strong> I am committed to growing my skills and staying updated with the latest trends in technology.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p>
            I am a full-stack software engineer with experience in web development, application design, and cloud technologies. I specialize in creating dynamic, responsive, and user-friendly web applications using modern frameworks such as React, Node.js, and MongoDB. I have a strong passion for coding, problem-solving, and building meaningful projects that make a difference.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
          <p>
            I am always open to discussing new projects, collaborations, or opportunities. Feel free to reach out to me:
            <br />
            <strong>Email:</strong> adarsh.dhakar@example.com
            <br />
            <strong>Phone:</strong> +91-123-456-7890
            <br />
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/adarsh-dhakar" target="_blank" rel="noopener noreferrer" className="text-blue-600">linkedin.com/in/adarsh-dhakar</a>
            <br />
            <strong>GitHub:</strong> <a href="https://github.com/adarshdhakar" target="_blank" rel="noopener noreferrer" className="text-blue-600">github.com/adarshdhakar</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
