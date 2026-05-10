 // Data Structure
        const data = {
            cse: {
                1: [
                    { code: "BT-101", name: "Engineering Chemistry (EC)", desc: "Water analysis, polymers, lubricants, spectroscopy, and phase equilibrium." },
                    { code: "BT-104", name: "Basic Electrical & Electronics (BEE)", desc: "DC circuits, AC circuits, magnetic circuits, electrical machines, and basic electronics." },
                    { code: "BT-203", name: "Mechanical Engineering (ME)", desc: "Materials, measurement, thermodynamics, fluid mechanics, and IC engines." },
                    { code: "BT-205", name: "Programming & Problem Solving (PPS)", desc: "C programming, algorithms, data structures, OOP concepts, and file handling." },
                    { code: "BT-301", name: "Computer Architecture (CA)", desc: "Digital logic, processor design, memory hierarchy, and instruction set architecture." },
                    { code: "BT-102", name: "Mathematics-I (M1)", desc: "Calculus, sequences & series, vector spaces, matrices, and eigenvalues." }
                ],
                2: [
                    { code: "CS-201", name: "Data Structures (DS)", desc: "Arrays, linked lists, stacks, queues, trees, graphs, and sorting algorithms." },
                    { code: "BT-202", name: "Linear Algebra (LA)", desc: "Vector spaces, linear transformations, eigenvalues, and matrix decomposition." },
                    { code: "CS-202", name: "Computer Networks (CN)", desc: "OSI model, TCP/IP, routing, switching, and network security fundamentals." },
                    { code: "BT-204", name: "Civil Engineering (CE)", desc: "Building materials, surveying, structural analysis, and construction techniques." },
                    { code: "CS-203", name: "Digital Circuits & Embedded Systems (DCES)", desc: "Logic design, sequential circuits, microcontrollers, and embedded C programming." }
                ],
                3: [
                    { code: "CS-301", name: "Database Management Systems (DBMS)", desc: "SQL, normalization, transaction management, and ER modeling." },
                    { code: "CS-302", name: "Operating Systems (OS)", desc: "Process management, memory management, file systems, and deadlock handling." },
                    { code: "CS-303", name: "Theory of Computation (TOC)", desc: "Automata, formal languages, Turing machines, and computability." },
                    { code: "CS-304", name: "Introduction to Java Programming", desc: "OOP concepts, exception handling, multithreading, and Java collections." },
                    { code: "CS-305", name: "Discrete Structures (DS)", desc: "Set theory, graph theory, combinatorics, and Boolean algebra." }
                ],
                4: [
                    { code: "CS-401", name: "Web Technology (WT)", desc: "HTML5, CSS3, JavaScript, React, Node.js, and full-stack development." },
                    { code: "CS-402", name: "Compiler Design (CD)", desc: "Lexical analysis, parsing, syntax-directed translation, and code optimization." },
                    { code: "CS-403", name: "Software Engineering & Project Management (SEPM)", desc: "SDLC models, Agile, UML, testing, and project planning." },
                    { code: "CS-404", name: "Advanced Java", desc: "Servlets, JSP, Spring Boot, Hibernate, and RESTful web services." },
                    { code: "CS-405", name: "Analysis & Design of Algorithms (ADA)", desc: "Greedy, divide-and-conquer, dynamic programming, and NP-completeness." }
                ],
                5: [
                    { code: "CS-501", name: "Theory of Computation", desc: "Advanced automata, formal grammars, and computational complexity." },
                    { code: "CS-502", name: "Database Management Systems", desc: "Advanced SQL, PL/SQL, query optimization, and distributed databases." },
                    { code: "CS-503A", name: "Data Analysis (Elective)", desc: "Statistical analysis, Big Data technologies, Hadoop, and MapReduce." },
                    { code: "CS-504A", name: "Internet & Web Technology (Elective)", desc: "Advanced web development, PHP, MySQL, and XML processing." },
                    { code: "CS-505", name: "Linux Lab", desc: "Shell scripting, system administration, and server configuration." },
                    { code: "CS-506", name: "Python Programming", desc: "Python basics, data structures, file handling, and application development." }
                ],
                6: [
                    { code: "CS-601", name: "Machine Learning", desc: "Supervised/unsupervised learning, neural networks, CNN, RNN, and TensorFlow." },
                    { code: "CS-602", name: "Computer Networks", desc: "Advanced routing, transport layer protocols, and network security." },
                    { code: "CS-603A", name: "Advanced Computer Architecture (Elective)", desc: "Pipeline processing, parallel architectures, and memory hierarchy design." },
                    { code: "CS-604B", name: "Project Management (Elective)", desc: "Software economics, iterative planning, and process automation." },
                    { code: "CS-605", name: "Data Analytics Lab", desc: "R, MATLAB, and Python for data analysis and visualization." },
                    { code: "CS-606", name: "Skill Development Lab", desc: "Design patterns, SDLC standards, and software product development." }
                ],
                7: [
                    { code: "MP-701", name: "Major Project Phase-I", desc: "Industry-oriented research project under faculty supervision. Proposal and design phase." }
                ],
                8: [
                    { code: "MP-801", name: "Major Project Phase-II", desc: "Implementation, testing, and dissertation of the major project." }
                ]
            },
            aiml: {
                1: [
                    { code: "AIML-101", name: "Engineering Physics", desc: "Quantum mechanics, wave optics, lasers, and fiber optics." },
                    { code: "AIML-102", name: "Mathematics-I (M1)", desc: "Calculus, differential equations, and linear algebra foundations." },
                    { code: "AIML-103", name: "Fundamentals of AI & ML", desc: "Introduction to AI, ML pipeline, Python for data science, and NumPy/Pandas." },
                    { code: "AIML-104", name: "Basic Electrical & Electronics", desc: "Circuit analysis, digital electronics, and sensors." },
                    { code: "AIML-105", name: "Engineering Graphics", desc: "Technical drawing, CAD fundamentals, and 3D modeling." },
                    { code: "AIML-106", name: "Communication Skills", desc: "Technical writing, presentation skills, and professional communication." }
                ],
                2: [
                    { code: "AIML-201", name: "Linear Algebra & Optimization", desc: "Matrix theory, eigen decomposition, gradient descent, and convex optimization." },
                    { code: "AIML-202", name: "Data Structures & Algorithms", desc: "Advanced data structures, algorithm analysis, and problem-solving strategies." },
                    { code: "AIML-203", name: "Probability & Statistics for ML", desc: "Random variables, distributions, hypothesis testing, and Bayesian inference." },
                    { code: "AIML-204", name: "Object Oriented Programming (Java)", desc: "Java fundamentals, design patterns, and GUI development." },
                    { code: "AIML-205", name: "Digital Electronics", desc: "Logic gates, sequential circuits, and FPGA basics." },
                    { code: "AIML-206", name: "Environmental Science", desc: "Ecosystems, pollution control, and sustainable development." }
                ],
                3: [
                    { code: "AIML-301", name: "Machine Learning-I", desc: "Regression, classification, SVM, decision trees, and ensemble methods." },
                    { code: "AIML-302", name: "Deep Learning Foundations", desc: "Neural networks, backpropagation, CNN architectures, and transfer learning." },
                    { code: "AIML-303", name: "Data Mining & Warehousing", desc: "Association rules, clustering, ETL processes, and OLAP." },
                    { code: "AIML-304", name: "Operating Systems", desc: "Process scheduling, memory management, and virtualization." },
                    { code: "AIML-305", name: "Database Management Systems", desc: "Relational algebra, SQL, NoSQL, and database design." }
                ],
                4: [
                    { code: "AIML-401", name: "Machine Learning-II", desc: "Unsupervised learning, reinforcement learning, and generative models." },
                    { code: "AIML-402", name: "Natural Language Processing", desc: "Text preprocessing, sentiment analysis, transformers, and BERT." },
                    { code: "AIML-403", name: "Computer Vision", desc: "Image processing, object detection, segmentation, and OpenCV." },
                    { code: "AIML-404", name: "Big Data Analytics", desc: "Hadoop ecosystem, Spark, streaming analytics, and cloud platforms." },
                    { code: "AIML-405", name: "Software Engineering", desc: "Agile methodologies, DevOps, and software quality assurance." }
                ],
                5: [
                    { code: "AIML-501", name: "Advanced Deep Learning", desc: "GANs, autoencoders, attention mechanisms, and model deployment." },
                    { code: "AIML-502", name: "Reinforcement Learning", desc: "MDP, Q-learning, policy gradients, and multi-agent systems." },
                    { code: "AIML-503", name: "MLOps & Model Deployment", desc: "CI/CD for ML, Docker, Kubernetes, and model monitoring." },
                    { code: "AIML-504", name: "AI Ethics & Governance", desc: "Bias in AI, fairness, explainability, and regulatory frameworks." },
                    { code: "AIML-505", name: "Cloud Computing for AI", desc: "AWS/Azure ML services, serverless computing, and edge AI." },
                    { code: "AIML-506", name: "Research Methodology", desc: "Literature review, experimental design, and academic writing." }
                ],
                6: [
                    { code: "AIML-601", name: "Generative AI & LLMs", desc: "GPT architecture, prompt engineering, fine-tuning, and RAG systems." },
                    { code: "AIML-602", name: "Multi-modal AI", desc: "Vision-language models, speech recognition, and cross-modal learning." },
                    { code: "AIML-603", name: "Robotics & Autonomous Systems", desc: "SLAM, path planning, sensor fusion, and ROS fundamentals." },
                    { code: "AIML-604", name: "Graph Neural Networks", desc: "Graph embeddings, GNN architectures, and network analysis." },
                    { code: "AIML-605", name: "AI Product Development", desc: "Product lifecycle, user research, and AI solution architecture." },
                    { code: "AIML-606", name: "Industry Internship", desc: "Hands-on industry experience with AI/ML projects." }
                ],
                7: [
                    { code: "MP-701", name: "Major Project Phase-I", desc: "Research-oriented AI/ML project under faculty guidance. Literature survey and model design." }
                ],
                8: [
                    { code: "MP-801", name: "Major Project Phase-II", desc: "Implementation, evaluation, and thesis submission of the major project." }
                ]
            }
        };

        let currentBranch = null;
        let currentSemester = 1;

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('year').textContent = new Date().getFullYear();
            setupNavbar();
            setupTabs();
        });

        function setupNavbar() {
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) navbar.classList.add('scrolled');
                else navbar.classList.remove('scrolled');
            });

            // Smooth scroll for nav links
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = document.querySelector(link.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                        document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
                        link.classList.add('active');
                    }
                });
            });
        }

        function setupTabs() {
            // Generate tabs for both branches
            ['cse', 'aiml'].forEach(branch => {
                const container = document.getElementById(`${branch}Tabs`);
                for (let i = 1; i <= 8; i++) {
                    const btn = document.createElement('button');
                    btn.className = `sem-tab ${i === 1 ? 'active' : ''}`;
                    btn.textContent = `${i}${getOrdinal(i)} Sem`;
                    btn.onclick = () => selectSemester(branch, i);
                    container.appendChild(btn);
                }
            });
        }

        function getOrdinal(n) {
            const s = ['th', 'st', 'nd', 'rd'];
            const v = n % 100;
            return s[(v - 20) % 10] || s[v] || s[0];
        }

        function showBranch(branch) {
            currentBranch = branch;
            // Hide all sections
            document.getElementById('branches').style.display = 'none';
            document.getElementById('cse-core').style.display = 'none';
            document.getElementById('cse-aiml').style.display = 'none';

            // Show selected
            const sectionId = branch === 'cse' ? 'cse-core' : 'cse-aiml';
            document.getElementById(sectionId).style.display = 'block';
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });

            // Load initial semester
            selectSemester(branch, 1);
        }

        function selectSemester(branch, sem) {
            currentSemester = sem;

            // Update tabs
            const tabsContainer = document.getElementById(`${branch}Tabs`);
            tabsContainer.querySelectorAll('.sem-tab').forEach((tab, idx) => {
                tab.classList.toggle('active', idx + 1 === sem);
            });

            // Load subjects
            const subjects = data[branch][sem] || [];
            const grid = document.getElementById(`${branch}Subjects`);
            grid.innerHTML = '';

            if (subjects.length === 0) {
                grid.innerHTML = '<div class="text-center" style="grid-column: 1/-1; color: var(--text-muted); padding: 3rem;"><i class="fas fa-inbox" style="font-size: 3rem; margin-bottom: 1rem; display: block;"></i>No subjects data available yet.</div>';
                return;
            }

            subjects.forEach((subj, idx) => {
                const card = document.createElement('div');
                card.className = 'subject-card fade-in';
                card.style.animationDelay = `${idx * 0.05}s`;
                card.innerHTML = `
                    <span class="subject-code">${subj.code}</span>
                    <h4>${subj.name}</h4>
                    <p>${subj.desc}</p>
                    <div class="subject-resources">
                        <span><i class="fas fa-file-alt"></i> Mid-Sem Papers</span>
                        <span><i class="fas fa-history"></i> PYQs</span>
                        <span><i class="fas fa-book"></i> Notes</span>
                    </div>
                `;
                card.onclick = () => openResourcePanel(branch, subj);
                grid.appendChild(card);
            });

            // Close any open resource panel
            closeResourcePanel(branch);
        }

        function openResourcePanel(branch, subject) {
            const panel = document.getElementById(`${branch}ResourcePanel`);
            const title = document.getElementById(`${branch}ResourceTitle`);
            const desc = document.getElementById(`${branch}ResourceDesc`);
            const grid = document.getElementById(`${branch}ResourceGrid`);

            title.textContent = subject.name;
            desc.textContent = `${subject.code} — Access mid-semester papers, previous year papers, and comprehensive notes below.`;

            const isProject = subject.code.startsWith('MP-');

            if (isProject) {
                grid.innerHTML = `
                    <div class="resource-category" style="grid-column: 1/-1;">
                        <h4><i class="fas fa-project-diagram"></i> Major Project Resources</h4>
                        <div class="file-list">
                            <div class="file-item">
                                <i class="fas fa-file-pdf"></i>
                                <div class="file-info">
                                    <div class="file-name">Project Guidelines & Template</div>
                                    <div class="file-meta">PDF • Upload your file here</div>
                                </div>
                            </div>
                            <div class="file-item">
                                <i class="fas fa-file-pdf"></i>
                                <div class="file-info">
                                    <div class="file-name">Synopsis Format</div>
                                    <div class="file-meta">PDF • Upload your file here</div>
                                </div>
                            </div>
                            <div class="file-item">
                                <i class="fas fa-file-pdf"></i>
                                <div class="file-info">
                                    <div class="file-name">Presentation Template</div>
                                    <div class="file-meta">PPTX • Upload your file here</div>
                                </div>
                            </div>
                        </div>
                        <div class="upload-placeholder mt-4" onclick="alert('Replace this with your file upload logic')">
                            <i class="fas fa-cloud-upload-alt"></i>
                            <span>Upload Project Files</span>
                        </div>
                    </div>
                `;
            } else {
                grid.innerHTML = `
                    <div class="resource-category">
                        <h4><i class="fas fa-clipboard-check"></i> Mid-Semester Papers</h4>
                        <div class="file-list">
                            ${generateFileItems(3, 'Mid-Sem', 'PDF')}
                        </div>
                        <div class="upload-placeholder mt-4" onclick="alert('Upload mid-semester papers here')">
                            <i class="fas fa-plus-circle"></i>
                            <span>Add Mid-Sem Papers</span>
                        </div>
                    </div>
                    <div class="resource-category">
                        <h4><i class="fas fa-history"></i> Previous Year Papers</h4>
                        <div class="file-list">
                            ${generateFileItems(3, 'PYQ', 'PDF')}
                        </div>
                        <div class="upload-placeholder mt-4" onclick="alert('Upload previous year papers here')">
                            <i class="fas fa-plus-circle"></i>
                            <span>Add PYQ Papers</span>
                        </div>
                    </div>
                    <div class="resource-category">
                        <h4><i class="fas fa-book-open"></i> Comprehensive Notes</h4>
                        <div class="file-list">
                            ${generateFileItems(5, 'Notes', 'PDF')}
                        </div>
                        <div class="upload-placeholder mt-4" onclick="alert('Upload notes here')">
                            <i class="fas fa-plus-circle"></i>
                            <span>Add Notes PDFs</span>
                        </div>
                    </div>
                `;
            }

            panel.classList.add('active');
            panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        function generateFileItems(count, type, format) {
            let html = '';
            for (let i = 1; i <= count; i++) {
                html += `
                    <div class="file-item" onclick="alert('Replace with actual file path')">
                        <i class="fas fa-file-pdf"></i>
                        <div class="file-info">
                            <div class="file-name">${type} ${i} — [Upload File]</div>
                            <div class="file-meta">${format} • Click to upload</div>
                        </div>
                    </div>
                `;
            }
            return html;
        }

        function closeResourcePanel(branch) {
            document.getElementById(`${branch}ResourcePanel`).classList.remove('active');
        }

        // Mobile menu toggle
        document.getElementById('mobileMenuBtn').addEventListener('click', () => {
            const navLinks = document.getElementById('navLinks');
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    