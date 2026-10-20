/* =========================
   Portfolio Data
   =========================
   Add/remove images for each project here.
   Put the actual files in:
   assets/projects/project1/
   assets/projects/project2/
   assets/projects/project3/
   ========================= */

const projects = {
        1: {
        title: "C++ Cashier System",
        tags: [
            "C++",
            "OOP",
            "Console Application",
            "Standard Library"
        ],
        images: [
            {
                src: "assets/projects/project1/menu_awal.jpeg",
                alt: "C++ Cashier System initial menu",
                caption: "Initial menu of the C++ Cashier System"
            },
            {
                src: "assets/projects/project1/cpp_cashier_system_flowchart.webp",
                alt: "C++ Cashier System flowchart",
                caption: "Flowchart of the C++ Cashier System"
            },
            {
                src: "assets/projects/project1/pilihan_makan.jpeg",
                alt: "Food selection menu",
                caption: "Food selection menu"
            },
            {
                src: "assets/projects/project1/pilihan_minum.jpeg",
                alt: "Beverage selection menu",
                caption: "Beverage selection menu"
            },
            {
                src: "assets/projects/project1/rincian_harga.jpeg",
                alt: "Order price summary",
                caption: "Order details and calculated prices"
            }
        ],
        bullets: [
            "The goal of this project was to develop a simple console-based cashier system using C++ and basic Object-Oriented Programming concepts.",
            "The program allows users to select food and beverage items from the available menus.",
            "Users can enter the quantity of each selected item, which is then stored as part of the order.",
            "The system provides separate menu options for food and beverages, including beverage variants such as iced and hot drinks.",
            "Selected orders are stored and displayed in an order summary containing the item names, quantities, and calculated prices.",
            "The program automatically calculates the total price based on the selected items and their quantities.",
            "A menu-driven console interface allows users to navigate between food selection, beverage selection, order details, and the exit option."
        ],
        technologies: [
            "C++",
            "Object-Oriented Programming (OOP)",
            "Standard C++ Library",
            "Console Application"
        ],
        github: "https://github.com/kingdanard/cpp-cashier-oop"
    },

        2: {
        title: "English–Indonesian Machine Translation Evaluation",
        tags: [
            "Python",
            "NLP",
            "Hugging Face",
            "Transformers",
            "BLEU"
        ],
        images: [
            {
                src: "assets/projects/project2/mt_evaluation_flowchart.webp",
                alt: "English-Indonesian Machine Translation Evaluation flowchart",
                caption: "Machine translation evaluation workflow"
            }
        ],
        bullets: [
            "The goal of this project was to evaluate a pretrained English–Indonesian neural machine translation model using both quantitative and qualitative approaches.",
            "An English–Indonesian dataset was loaded from Hugging Face and a test set was prepared for translation evaluation.",
            "A pretrained English → Indonesian machine translation model was used to generate Indonesian translations from the selected English test sentences.",
            "Translation quality was quantitatively evaluated using the BLEU score by comparing the generated translations with the reference translations.",
            "A qualitative analysis was also performed on 20 randomly selected test samples to examine differences between the model predictions and reference translations.",
            "The translation errors were analyzed based on issues such as word choice, terminology, sentence meaning, and translation fluency.",
            "The results were visualized to identify recurring patterns in the model's translation errors and provide insights into its translation performance."
        ],
        technologies: [
            "Python",
            "Hugging Face",
            "Transformers",
            "MarianMT",
            "BLEU",
            "NLP",
            "Google Colab"
        ],
        github: "https://github.com/kingdanard/machine-translation-evaluation"
    },

        3: {
        title: "Shortest TransJakarta Route Using Dijkstra's Algorithm",
        tags: [
            "Python",
            "Dijkstra",
            "NetworkX",
            "Geospatial"
        ],
        images: [
            {
                src: "assets/projects/project3/dijkstra_flowchart.webp",
                alt: "Shortest TransJakarta Route flowchart",
                caption: "Workflow for finding the shortest TransJakarta route"
            },
            {
                src: "assets/projects/project3/Rute_Asean_ke_Blok M.png",
                alt: "Route from ASEAN to Blok M",
                caption: "Shortest route from ASEAN to Blok M"
            },
            {
                src: "assets/projects/project3/Rute_Asean_ke_Kota.png",
                alt: "Route from ASEAN to Kota",
                caption: "Shortest route from ASEAN to Kota"
            }
        ],
        bullets: [
            "The goal of this project was to determine the shortest route between two selected TransJakarta stops based on geographic distance.",
            "The TransJakarta stop data was modeled as a weighted graph, where stops represent nodes and connections between consecutive stops represent edges.",
            "Geographic distances between stops were calculated using the Haversine formula and used as edge weights.",
            "Dijkstra's shortest path algorithm was applied to find the shortest route between a selected origin and destination stop.",
            "The resulting route was visualized to show the sequence of TransJakarta stops between the selected locations.",
            "An interactive command-line interface (CLI) allows users to enter an origin and destination stop and obtain the calculated shortest route."
        ],
        technologies: [
            "Python",
            "Pandas",
            "NetworkX",
            "Matplotlib",
            "Haversine",
            "Google Colab",
            "Kaggle"
        ],
        github: "https://github.com/kingdanard/transjakarta-dijkstra-shortest-path"
    },
		4: {
        title: "Flying Robot — Drone CAD Assembly",
        tags: [
            "Autodesk Inventor",
            "CAD",
            "3D Assembly",
            "Mechanical Design"
        ],
        images: [
            {
                src: "assets/projects/project4/home.png",
                alt: "Home view assembly",
                caption: "Home View Assembly"
            },
            {
                src: "assets/projects/project4/isometrik1.png",
                alt: "Isometric View 1",
                caption: "Isometric View 1"
            },
            {
                src: "assets/projects/project4/isometrik2.png",
                alt: "Isometric View 2",
                caption: "Isometric View 2"
            },
            {
                src: "assets/projects/project4/depan.png",
                alt: "Drone front view",
                caption: "Front View"
            },
            {
                src: "assets/projects/project4/belakang.png",
                alt: "Drone rear view",
                caption: "Rear View"
            },
            {
                src: "assets/projects/project4/bawah.png",
                alt: "Drone bottom view",
                caption: "Bottom View"
            }
        ],
        bullets: [
            "The project was developed as a final assignment for the Flying Robot course, focusing on the CAD modeling and assembly of a multirotor drone.",
            "My contribution focused on adapting and assembling the drone's CAD components using Autodesk Inventor.",
            "Existing CAD components were sourced from online CAD libraries such as GrabCAD and adjusted according to the project's dimensional requirements.",
            "Component dimensions were modified and scaled to match the required specifications of the drone design.",
            "Multiple components were integrated into a complete drone assembly using Autodesk Inventor.",
            "Assembly joints and constraints were carefully positioned to ensure that the components were properly aligned and connected.",
            "The final assembly included the drone frame, arms, motors, propellers, landing structure, and other supporting components."
        ],
        technologies: [
            "Autodesk Inventor",
            "CAD Modeling",
            "3D Assembly",
            "Mechanical Design"
        ]
    },
        5: {
        title: "Medical Mask Waste Shredder — CAD Design",
        tags: [
            "Autodesk Inventor",
            "CAD",
            "3D CAD Modeling",
            "Part Design",
            "Assembly Design"
        ],
        images: [
            {
                src: "assets/projects/project5/final_render.webp",
                alt: "Medical Mask Waste Shredder final design",
                caption: "Final Design"
            },
            {
                src: "assets/projects/project5/final_drawing.png",
                alt: "Engineering drawing",
                caption: "Engineering Drawing"
            },
            {
                src: "assets/projects/project5/shredder_blade.png",
                alt: "Shredder blade",
                caption: "Shredder Blade"
            },
            {
                src: "assets/projects/project5/shaft.png",
                alt: "Shaft design",
                caption: "Shaft"
            },
            {
                src: "assets/projects/project5/shaft blade.png",
                alt: "Blade and shaft assembly",
                caption: "Blade & Shaft Assembly"
            },
            {
                src: "assets/projects/project5/gear.png",
                alt: "Gear design",
                caption: "Gear Design"
            },
            {
                src: "assets/projects/project5/von_mises_stress.webp",
                alt: "Von Mises stress analysis",
                caption: "Von Mises Stress Analysis"
            },
            {
                src: "assets/projects/project5/safety_factor.webp",
                alt: "Safety factor analysis",
                caption: "Safety Factor Analysis"
            }
        ],
        bullets: [
            "Designed and modeled mechanical components of the medical mask waste shredding machine using Autodesk Inventor.",
            "Created 3D CAD models for key components, including the shredder blade, shaft coupling, gear, and machine enclosure.",
            "Developed engineering drawings with dimensions and technical details for the designed components.",
            "Assembled the individual components into the overall machine using assembly constraints.",
            "Produced the final 3D assembly and rendered visualization of the machine.",
            "Performed structural analysis using Von Mises Stress and Safety Factor to evaluate the mechanical design."
        ],
        technologies: [
            "Autodesk Inventor",
            "3D CAD Modeling",
            "Part Design",
            "Assembly Design",
            "Engineering Drawing",
            "Stress Analysis"
        ]
    },
        6: {
        title: "Smoking Detection using YOLOv8",
        tags: [
            "Python",
            "YOLOv8",
            "Computer Vision",
            "Deep Learning"
        ],
        images: [
            {
                src: "assets/projects/project6/smoking_detection_result.webp",
                alt: "Smoking detection result",
                caption: "Smoking Detection Result"
            },
            {
                src: "assets/projects/project6/example_dataset.webp",
                alt: "Smoking detection dataset examples",
                caption: "Dataset Examples"
            },
            {
                src: "assets/projects/project6/confusion_matrix_epoch50.png",
                alt: "Confusion matrix at epoch 50",
                caption: "Confusion Matrix — Epoch 50"
            },
            {
                src: "assets/projects/project6/confusion_matrix_epoch100.png",
                alt: "Confusion matrix at epoch 100",
                caption: "Confusion Matrix — Epoch 100"
            },
            {
                src: "assets/projects/project6/confusion_matrix_epoch122.png",
                alt: "Confusion matrix at epoch 122",
                caption: "Confusion Matrix — Epoch 122"
            }
        ],
        bullets: [
            "The goal of this project was to develop an object detection system for identifying smoking-related objects and smoking behavior from visual input.",
            "The project used YOLOv8 to detect objects related to smoking, including smokers and cigarettes.",
            "A custom dataset containing images related to smoking detection was used for model training and evaluation.",
            "The model was trained using different epoch configurations, including 50, 100, and 200 epochs.",
            "Model performance was evaluated using normalized confusion matrices and detection results.",
            "The trained model was tested on video input using different confidence threshold configurations.",
            "The detection results were used to identify PEROKOK, NON-PEROKOK, and ROKOK."
        ],
        technologies: [
            "Python",
            "YOLOv8",
            "OpenCV",
            "Google Colab",
            "Computer Vision",
            "Deep Learning"
        ]
    },
		7: {
		title: "Wall Following Robot — Robotic Experiment I",
		tags: [
			"Arduino",
			"C++",
			"PID Control",
			"Ultrasonic Sensor",
			"Color Sensor",
			"Robotics"
		],
		images: [
			{
				src: "assets/projects/project7/robot_final (1).webp",
				alt: "Final Wall Following Robot prototype",
				caption: "Final Robot Prototype"
			},
			{
				src: "assets/projects/project7/robot_cad.png",
				alt: "Wall Following Robot CAD design",
				caption: "Robot CAD Design"
			},
			{
				src: "assets/projects/project7/rangkaian_electrical.webp",
				alt: "Wall Following Robot electrical system",
				caption: "Electrical System"
			},
			{
				src: "assets/projects/project7/pid.png",
				alt: "PID control implementation",
				caption: "PID Control Implementation"
			},
			{
				src: "assets/projects/project7/read_distance.jpg",
				alt: "Ultrasonic distance sensing",
				caption: "Ultrasonic Distance Sensing"
			},
			{
				src: "assets/projects/project7/read_color.jpg",
				alt: "Color detection",
				caption: "Color Detection"
			},
			{
				src: "assets/projects/project7/rgb.jpg",
				alt: "RGB sensor reading",
				caption: "RGB Sensor Reading"
			}
		],
		bullets: [
			"The project was developed as a group assignment for the Robotic Experiment I course.",
			"As the project coordinator, I coordinated the team's work across mechanical, electrical, and software development.",
			"The robot was designed to navigate a maze from a designated starting point to the destination using a wall following approach.",
			"Ultrasonic sensors were used to measure the robot's distance from the surrounding walls.",
			"PID control was implemented to adjust motor speeds based on the measured distance and maintain the desired position relative to the wall.",
			"A color sensor was used to detect designated color markers during the robot's navigation.",
			"The final prototype integrated the mechanical structure, electrical components, sensors, motor control, and navigation logic into a single autonomous robot."
		],
		technologies: [
			"Arduino Uno",
			"C++",
			"PID Control",
			"Ultrasonic Sensor",
			"TCS3200 Color Sensor",
			"L298N",
			"DC Motor",
			"Embedded Systems",
			"Arduino IDE",
			"CAD"
		]
	},
		8: {
		title: "Forklift Robot — Robotic Experiment II",
		tags: [
			"Arduino IDE",
			"C++",
			"ESP32",
			"Robotics",
			"Autonomous Robot",
			"Line Following",
			"Color Sensor"
		],
		images: [
			{
				src: "assets/projects/project8/robot_final.webp",
				alt: "Final Forklift Robot",
				caption: "Final Forklift Robot"
			},
			{
				src: "assets/projects/project8/side_view.jpg",
				alt: "Forklift Robot rear view",
				caption: "Forklift Robot — Rear View"
			},
			{
				src: "assets/projects/project8/front_view.webp",
				alt: "Forklift Robot front view",
				caption: "Forklift Robot — Front View"
			}
		],
		bullets: [
			"The project was developed as a group assignment for the Robotic Experiment II course.",
			"As the project coordinator, I coordinated the team's work and integration during the development of the robot.",
			"The robot was designed to pick up objects from designated points and transport them to another designated location.",
			"A marked black-line path was used to guide the robot's movement within the arena.",
			"A color sensor was integrated to support the robot's navigation and detect designated areas along the path.",
			"The forklift mechanism was used to lift and carry objects during the transportation process.",
			"The final prototype combined autonomous navigation and object-handling capabilities into a single mobile robot."
		],
		technologies: [
			"Arduino IDE",
			"ESP32",
			"C++",
			"Color Sensor",
			"Line Following",
			"Autonomous Robotics",
			"Forklift Mechanism"
		]
	},

		9: {
        title: "Retail Sales Performance Analysis & Dashboard",
        tags: [
            "Python",
            "Pandas",
            "EDA",
            "Data Visualization",
            "Streamlit"
        ],
        images: [
            {
                src: "assets/projects/project9/sales_by_category.png",
                alt: "Sales by Category",
                caption: "Sales performance across product categories"
            },
            {
                src: "assets/projects/project9/sales_by_subcategory.png",
                alt: "Sales by Subcategory",
                caption: "Sales comparison across product subcategories"
            },
            {
                src: "assets/projects/project9/sales_by_region.png",
                alt: "Sales by Region",
                caption: "Sales distribution across regions"
            },
            {
                src: "assets/projects/project9/monthly_sales_trend.png",
                alt: "Monthly Sales Trend",
                caption: "Monthly sales trend over time"
            },
            {
                src: "assets/projects/project9/sales_by_segment.png",
                alt: "Sales by Customer Segment",
                caption: "Sales performance by customer segment"
            },
            {
            src: "assets/projects/project9/Visual Dashboard_st.png",
            alt: "Superstore Sales Dashboard",
            caption: "Interactive Streamlit dashboard with sales KPIs, filters, and visualizations"
			}
        ],
        bullets: [
            "The goal of this project was to analyze retail sales data and identify patterns in product categories, subcategories, regions, and customer segments.",
            "The Superstore dataset was loaded and explored using Pandas to understand its structure, data types, and key variables.",
            "Data preparation included converting order and shipping dates into datetime format and checking for missing values and duplicate records.",
            "Exploratory Data Analysis (EDA) was performed to compare sales performance across categories, subcategories, regions, and customer segments.",
            "Visualizations were created to communicate key sales patterns and monthly trends.",
            "An interactive Streamlit dashboard was developed with filters for region, category, and customer segment, alongside sales KPIs and charts."
        ],
        technologies: [
            "Python",
            "Pandas",
            "Matplotlib",
            "Seaborn",
            "Streamlit",
            "Google Colab",
            "Kaggle",
            "GitHub"
        ],
        github: "https://github.com/kingdanard/Retail-Sales-Performance-Analysis",
        dashboard: "https://superstore-analytics-da.streamlit.app/"
    },

};

const notableProjects = {
    1: {
		title: "Classification of Movement Activities of Bali Strait's Purse Seine Vessel Using One Dimensional Convolutional Neural Network (1D-CNN)",

		tags: [
			"R",
			"1D-CNN",
			"Deep Learning",
			"Keras",
			"TensorFlow",
			"GPS Trajectory"
		],

		images: [
			{
				src: "assets/projects/notable1/1.png",
				alt: "R Shiny login interface",
				caption: "R Shiny Dashboard — Login Interface"
			},
			{
				src: "assets/projects/notable1/2.png",
				alt: "Bali Strait vessel trajectory map",
				caption: "Vessel Activity Trajectory Map"
			},
			{
				src: "assets/projects/notable1/3.png",
				alt: "GPS tracker data table",
				caption: "GPS Tracker Data and Activity Classification"
			},
			{
				src: "assets/projects/notable1/6.png",
				alt: "Fishing vessel trajectory",
				caption: "Fishing Activity Trajectory"
			},
			{
				src: "assets/projects/notable1/7.png",
				alt: "Non-fishing vessel trajectory",
				caption: "Non-Fishing Activity Trajectory"
			},
			{
				src: "assets/projects/notable1/testing_online_cm.png",
				alt: "Testing confusion matrix",
				caption: "Testing Confusion Matrix"
			},
			{
				src: "assets/projects/notable1/9.png",
				alt: "Training and validation learning curves",
				caption: "Training and Validation Learning Curves"
			},
			{
				src: "assets/projects/notable1/10.png",
				alt: "Training ROC curve",
				caption: "Training ROC Curve — AUC 0.895"
			},
			{
				src: "assets/projects/notable1/testing_offline_cm.png",
				alt: "Offline testing confusion matrix",
				caption: "Offline Testing Confusion Matrix"
			},
			{
				src: "assets/projects/notable1/12.png",
				alt: "Offline testing ROC curve",
				caption: "Offline Testing ROC Curve — AUC 0.801"
			}
		],

		bullets: [
			"Preprocessed 97 GPS tracking trips in the Bali Strait, applying Catmull-Rom modified spline interpolation to standardize 1-minute intervals and extracting sequential distance, speed, and bearing difference features.",
			"Segmented time-series trajectories into 20-minute sliding windows with a balanced 1:1 ratio between fishing and non-fishing classes.",
			"Designed an optimal 5-layer 1D-CNN architecture (32 to 128 filters, kernel size 1, MaxPooling1D, L2 regularization, and Dropout) tuned across 96 hyperparameter scenarios in R and Keras/TensorFlow.",
			"Achieved 83.3% validation accuracy (AUC 0.895, 100% recall, 43.8% loss) and validated field performance on offline GPS data with 95% recall (65.0% accuracy, AUC 0.801), supported by an interactive R Shiny and Leaflet web dashboard."
		],

		technologies: [
			"R",
			"1D-CNN",
			"Keras",
			"TensorFlow",
			"R Shiny",
			"Leaflet",
			"Tidyverse",
			"ggplot2"
		]
	},

    2: {
		title: "Purse Seine Vessel Activity Classification Using CNN (Internship BPISDKP KKP)",

		tags: [
			"Python",
			"2D-CNN",
			"Computer Vision",
			"TensorFlow",
			"OpenCV"
		],

		images: [
			{
				src: "assets/projects/notable2/spatial_trajectory_samples.png",
				alt: "Spatial trajectory samples",
				caption: "Spatial Trajectory Samples"
			},
			{
				src: "assets/projects/notable2/data_augmentation_samples.png",
				alt: "Data augmentation samples",
				caption: "Data Augmentation Samples"
			},
			{
				src: "assets/projects/notable2/pkl_1.png",
				alt: "Confusion matrix",
				caption: "Confusion Matrix 3-Class Activity Classification"
			},
			{
				src: "assets/projects/notable2/pkl_2.png",
				alt: "Training and validation curves",
				caption: "Training and Validation Loss & Accuracy"
			}
		],

		bullets: [
			"The goal of this project was to classify purse seine fishing vessel activities in the Bali Strait into Cruising (C), Fishing (FISH), and Floating (FLOAT) to support fishing ground monitoring at BPISDKP KKP.",
			"Telemetry records from 15 GPS trackers were separated into individual trips, and missing points were reconstructed using Catmull-Rom modified interpolation to standardize time intervals to 60 seconds.",
			"The continuous movement data was transformed into visual 2D spatial trajectory plots with a standardized resolution of 400x400 pixels.",
			"Data augmentation (horizontal, vertical, both flips, and 1.2x scaling) was implemented using OpenCV and NumPy to balance minority classes in the training set.",
			"A 3-block sequential 2D-CNN architecture (Conv2D with 32, 64, 128 filters, BatchNormalization, MaxPooling2D, and Dropout) was constructed using TensorFlow/Keras and optimized with Adam over 50 epochs.",
			"Evaluated model generalization using test metrics and confusion matrices, achieving a test accuracy of 72.53% with a test loss of 1.8312.",
			"Identified overfitting patterns through validation loss analysis, highlighting classification challenges between FISH and FLOAT due to overlapping drift dynamics and limited field samples."
		],

		technologies: [
			"Python",
			"TensorFlow",
			"Keras",
			"OpenCV",
			"Scikit-Learn",
			"NumPy",
			"Matplotlib",
			"Visual Studio Code"
		]
	}
};

/* =========================
   Scroll Fade-In
   ========================= */

const faders = document.querySelectorAll(".fade-in");

if ("IntersectionObserver" in window) {
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    faders.forEach(fader => appearOnScroll.observe(fader));
} else {
    faders.forEach(fader => fader.classList.add("visible"));
}

/* =========================
   Mobile Navigation
   ========================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

/* =========================
   Light / Dark Theme
   ========================= */

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

function applyTheme(theme) {
    document.documentElement.classList.toggle("light-theme", theme === "light");
    themeIcon.textContent = theme === "light" ? "☀" : "☾";
    themeToggle.setAttribute(
        "aria-label",
        theme === "light" ? "Switch to dark mode" : "Switch to light mode"
    );
}

const savedTheme = localStorage.getItem("portfolio-theme");
const initialTheme = savedTheme || "dark";
applyTheme(initialTheme);

themeToggle.addEventListener("click", () => {
    const isLight = document.documentElement.classList.contains("light-theme");
    const nextTheme = isLight ? "dark" : "light";

    applyTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
});

/* =========================
   Case Study Modal + Gallery
   ========================= */

const modal = document.getElementById("case-study-modal");
const closeButton = document.querySelector(".close-modal");
const modalTitle = document.getElementById("modal-title");
const modalTags = document.getElementById("modal-tags");
const galleryImage = document.getElementById("gallery-image");
const galleryCaption = document.getElementById("gallery-caption");
const galleryThumbnails = document.getElementById("gallery-thumbnails");
const galleryDots = document.getElementById("gallery-dots");

const galleryPrev = document.getElementById("gallery-prev");
const galleryNext = document.getElementById("gallery-next");
const starBullets = document.getElementById("star-bullets");
const technologyList = document.getElementById("technology-list");
const githubLink = document.getElementById("github-link");
const dashboardLink = document.getElementById("dashboard-link");

let currentImages = [];
let currentImageIndex = 0;
let galleryAutoSlide;

function renderGallery() {
    if (!currentImages.length) return;

    const image = currentImages[currentImageIndex];

    galleryImage.src = image.src;
    galleryImage.alt = image.alt;
    galleryCaption.textContent = image.caption || "";

    galleryThumbnails.innerHTML = "";
    galleryDots.innerHTML = "";

    currentImages.forEach((item, index) => {
        const thumbButton = document.createElement("button");
        thumbButton.className = "gallery-thumb";
        thumbButton.type = "button";
        thumbButton.setAttribute("aria-label", `Show image ${index + 1}`);

        if (index === currentImageIndex) {
            thumbButton.classList.add("active");
        }

        const thumbImage = document.createElement("img");
        thumbImage.src = item.src;
        thumbImage.alt = item.alt;

        thumbImage.onerror = () => {
            thumbButton.style.display = "none";
        };

        thumbButton.appendChild(thumbImage);

        thumbButton.addEventListener("click", () => {
            currentImageIndex = index;
            renderGallery();
            resetAutoSlide();
        });

        galleryThumbnails.appendChild(thumbButton);
    });
	/* ===== Gallery Dots ===== */

	currentImages.forEach((item, index) => {
		const dot = document.createElement("button");

		dot.className = "gallery-dot";
		dot.type = "button";
		dot.setAttribute("aria-label", `Show image ${index + 1}`);

		if (index === currentImageIndex) {
			dot.classList.add("active");
		}

		dot.addEventListener("click", () => {
			currentImageIndex = index;
			renderGallery();
			resetAutoSlide();
		});

		galleryDots.appendChild(dot);
	});
    galleryPrev.style.display = currentImages.length > 1 ? "grid" : "none";
    galleryNext.style.display = currentImages.length > 1 ? "grid" : "none";
}

function startAutoSlide() {
    clearInterval(galleryAutoSlide);

    if (currentImages.length <= 1) return;

    galleryAutoSlide = setInterval(() => {
        currentImageIndex =
            (currentImageIndex + 1) % currentImages.length;

        renderGallery();
    }, 5000);
}

function resetAutoSlide() {
    startAutoSlide();
}

function openCaseStudy(projectId, category) {
    const project =
        category === "notable"
            ? notableProjects[projectId]
            : projects[projectId];
    if (!project) return;

    modalTitle.textContent = project.title;

    modalTags.innerHTML = project.tags
        .map(tag => `<span class="tag">${tag}</span>`)
        .join("");

    starBullets.innerHTML = `
        <ul>
            ${project.bullets.map(bullet => `<li>${bullet}</li>`).join("")}
        </ul>
    `;

    technologyList.innerHTML = project.technologies
        .map(tech => `<span class="tag">${tech}</span>`)
        .join("");
		if (project.github) {
		githubLink.href = project.github;
		githubLink.style.display = "inline-flex";
	} else {
		githubLink.style.display = "none";
	}
	
		if (project.dashboard) {
		dashboardLink.href = project.dashboard;
		dashboardLink.style.display = "inline-flex";
	} else {
		dashboardLink.style.display = "none";
	}

	
    currentImages = project.images;
    currentImageIndex = 0;
    renderGallery();
    startAutoSlide();

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    closeButton.focus();
}

function closeCaseStudy() {
	clearInterval(galleryAutoSlide);
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

document.querySelectorAll(".open-case-study").forEach(button => {
    button.addEventListener("click", () => {
        openCaseStudy(
            button.dataset.project,
            button.dataset.category
        );
    });
});
const navDropdown = document.querySelector(".nav-dropdown");
const navDropdownToggle = document.querySelector(".nav-dropdown-toggle");

navDropdownToggle.addEventListener("click", () => {
    navDropdown.classList.toggle("is-open");
});
closeButton.addEventListener("click", closeCaseStudy);

modal.addEventListener("click", event => {
    if (event.target === modal) {
        closeCaseStudy();
    }
});

galleryPrev.addEventListener("click", () => {
    if (!currentImages.length) return;
    currentImageIndex =
        (currentImageIndex - 1 + currentImages.length) % currentImages.length;
    renderGallery();
    resetAutoSlide();
});

galleryNext.addEventListener("click", () => {
    if (!currentImages.length) return;
    currentImageIndex =
        (currentImageIndex + 1) % currentImages.length;
    renderGallery();
    resetAutoSlide();
});

document.addEventListener("keydown", event => {
    if (!modal.classList.contains("is-open")) return;

    if (event.key === "Escape") {
        closeCaseStudy();
    }

    if (event.key === "ArrowLeft" && currentImages.length > 1) {
        currentImageIndex =
            (currentImageIndex - 1 + currentImages.length) % currentImages.length;
        renderGallery();
    }

    if (event.key === "ArrowRight" && currentImages.length > 1) {
        currentImageIndex =
            (currentImageIndex + 1) % currentImages.length;
        renderGallery();
    }
});

/* =========================
   Copy Email
   ========================= */

const emailAddress = document.getElementById("email-address");
const copyEmailButton = document.getElementById("copy-email");
const copyLabel = document.getElementById("copy-label");

copyEmailButton.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(emailAddress.textContent.trim());
        copyLabel.textContent = "Copied!";
    } catch (error) {
        // Fallback for browsers where Clipboard API is unavailable.
        const textArea = document.createElement("textarea");
        textArea.value = emailAddress.textContent.trim();
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
        copyLabel.textContent = "Copied!";
    }

    setTimeout(() => {
        copyLabel.textContent = "Copy";
    }, 1500);
});

/* =========================
   Hero Typing Animation
   ========================= */

const greetingText = document.getElementById("greeting-text");
const interestText = document.getElementById("interest-text");

const greetings = [
    "Hello...",
    "Hi...",
    "Bonjour..."
];

const interests = [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Data Science",
    "Data Analytics"
];

let greetingIndex = 0;
let interestIndex = 0;

async function typeText(element, text, speed = 90) {
    element.textContent = "";

    for (let i = 0; i < text.length; i++) {
        element.textContent += text[i];
        await new Promise(resolve => setTimeout(resolve, speed));
    }
}

async function deleteText(element, speed = 50) {
    while (element.textContent.length > 0) {
        element.textContent = element.textContent.slice(0, -1);
        await new Promise(resolve => setTimeout(resolve, speed));
    }
}

async function greetingLoop() {
    while (true) {
        await typeText(greetingText, greetings[greetingIndex], 100);
        await new Promise(resolve => setTimeout(resolve, 1500));
        await deleteText(greetingText, 60);

        greetingIndex =
            (greetingIndex + 1) % greetings.length;
    }
}

async function interestLoop() {
    while (true) {
        await typeText(interestText, interests[interestIndex], 80);
        await new Promise(resolve => setTimeout(resolve, 1800));
        await deleteText(interestText, 50);

        interestIndex =
            (interestIndex + 1) % interests.length;
    }
}

greetingLoop();
interestLoop();
/* =========================
   Show More / Less Projects
   ========================= */

const projectsGrid = document.querySelector("#projects .projects-grid");
const toggleProjectsButton = document.getElementById("toggle-projects");

toggleProjectsButton.addEventListener("click", () => {
    projectsGrid.classList.toggle("show-all");

    if (projectsGrid.classList.contains("show-all")) {
        toggleProjectsButton.textContent = "Show Less";
    } else {
        toggleProjectsButton.textContent = "Show More";
    }
});
