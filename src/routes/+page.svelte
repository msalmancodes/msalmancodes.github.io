<script>
  import { fade, slide } from "svelte/transition";
  import { onMount } from "svelte";

  let showAbout = false;
  let showBio = false;
  let showInterests = false;
  let showSkills = false;
  let showExperience = false;
  let showProjects = false;

  // Project expansion states
  let expandedProjects = {
    weather: false,
    wildfire: false,
    satellite: false,
    chatbot: false,
  };

  // ⭐ REMOVED: All typing animation variables and logic
  // ⭐ REMOVED: displayedQuote, typingComplete, showMainContent, fullQuote, quoteIndex

  // ⭐ NEW: Direct quote constant
  const fullQuote =
    "Every AI system we build is a blueprint for the future — let's design with intent, and build with care.";

  function toggleProject(project) {
    expandedProjects[project] = !expandedProjects[project];
  }
</script>

<!-- ⭐ REMOVED: Full screen typing animation block -->
<!-- ⭐ REMOVED: {#if !showMainContent} block -->
<!-- ⭐ REMOVED: {#if showMainContent} wrapper -->

<!-- ⭐ CHANGED: Main content now renders directly without conditions -->
<div
  class="min-h-screen bg-[#f8fafc] text-[#0c4a6e] flex flex-col items-center justify-center px-6 py-12 font-sans"
>
  <!-- Profile Image -->
  <div class="flex justify-center">
    <img
      src="/PortfolioPic.jpeg"
      alt="Profile"
      class="rounded-full w-40 h-40 object-cover shadow-lg ring-4 ring-white"
    />
  </div>

  <h1 class="mt-6 text-3xl font-bold text-[#0c4a6e] tracking-tight">
    Muhammad Salman
  </h1>
  <p class="text-[#64748b] text-base mt-2">
    MS Electrical & Computer Engineering, Northeastern University
  </p>

  <!-- Social Links with bars -->
  <div class="flex justify-center items-center gap-2 mt-6">
    <a
      href="https://github.com/msalmancodes"
      target="_blank"
      class="text-sm text-[#64748b] hover:text-[#0284c7] transition-colors duration-200 font-medium px-2"
      >GitHub</a
    >
    <span class="text-[#64748b]">|</span>
    <a
      href="https://www.linkedin.com/in/muhammadsalman-in/"
      target="_blank"
      class="text-sm text-[#64748b] hover:text-[#0284c7] transition-colors duration-200 font-medium px-2"
      >LinkedIn</a
    >
    <span class="text-[#64748b]">|</span>
    <a
      href="mailto:salman.mu@northeastern.edu"
      class="text-sm text-[#64748b] hover:text-[#0284c7] transition-colors duration-200 font-medium px-2"
      >Email</a
    >
  </div>

  <!-- Quote (static, smaller) -->
  <p
    class="text-center mt-8 text-xl italic font-medium max-w-2xl leading-relaxed tracking-wide text-[#0c4a6e] opacity-90"
  >
    "{fullQuote}"
  </p>

  <!-- About Me Section with nested subsections -->
  <div
    class="mt-10 w-full max-w-3xl bg-white shadow-sm border border-gray-100 rounded-xl p-6 transition-shadow hover:shadow-md"
  >
    <button
      class="text-xl font-semibold hover:text-[#0284c7] transition-colors duration-200 flex items-center gap-2 cursor-pointer w-full text-left"
      on:click={() => (showAbout = !showAbout)}
    >
      About Me
      <span class="text-sm text-[#64748b]">{showAbout ? "−" : "+"}</span>
    </button>

    {#if showAbout}
      <div class="mt-4 space-y-4" in:slide>
        <!-- Bio Subsection -->
        <div class="pl-4">
          <button
            class="text-lg font-medium hover:text-[#0284c7] transition-colors duration-200 flex items-center gap-2 cursor-pointer w-full text-left"
            on:click={() => (showBio = !showBio)}
          >
            Bio
            <span class="text-sm text-[#64748b]">{showBio ? "−" : "+"}</span>
          </button>
          {#if showBio}
            <p
              class="mt-3 text-[#64748b] leading-relaxed text-justify pl-4 border-l-2 border-[#0284c7]"
              in:slide
            >
              I'm a graduate student at Northeastern University pursuing an MS
              in Electrical and Computer Engineering with a focus on Computer
              Vision, Machine Learning, and Algorithms. I bring experience in
              both academic research and industry, with projects ranging from
              probabilistic weather modeling to generative satellite imagery.
              Currently, I serve as an AI Instructional Assistant at CATLR,
              where I co-design GenAI-integrated teaching strategies. I'm
              passionate about the intersection of AI, education, and climate
              resilience.
            </p>
          {/if}
        </div>

        <!-- Interests Subsection -->
        <div class="pl-4">
          <button
            class="text-lg font-medium hover:text-[#0284c7] transition-colors duration-200 flex items-center gap-2 cursor-pointer w-full text-left"
            on:click={() => (showInterests = !showInterests)}
          >
            Interests
            <span class="text-sm text-[#64748b]"
              >{showInterests ? "−" : "+"}</span
            >
          </button>
          {#if showInterests}
            <p
              class="mt-3 text-[#64748b] leading-relaxed text-justify pl-4 border-l-2 border-[#0284c7]"
              in:slide
            >
              <!-- Add your interests content here -->
              [Your interests content will go here]
            </p>
          {/if}
        </div>

        <!-- Skills Subsection -->
        <div class="pl-4">
          <button
            class="text-lg font-medium hover:text-[#0284c7] transition-colors duration-200 flex items-center gap-2 cursor-pointer w-full text-left"
            on:click={() => (showSkills = !showSkills)}
          >
            Skills
            <span class="text-sm text-[#64748b]">{showSkills ? "−" : "+"}</span>
          </button>
          {#if showSkills}
            <div
              class="mt-3 text-[#64748b] pl-4 border-l-2 border-[#0284c7] space-y-3"
              in:slide
            >
              <div>
                <p class="font-medium text-[#0c4a6e]">Machine Learning</p>
                <p class="text-sm">
                  Neural Networks, Decision Trees, Ensemble Methods, Generative
                  Models, Predictive Modeling, Deep probabilistic Models,
                  Bayesian Models
                </p>
              </div>
              <div>
                <p class="font-medium text-[#0c4a6e]">Generative AI & LLMs</p>
                <p class="text-sm">
                  GANs, Diffusion Models, Transformers, LangChain, OpenAI API,
                  Prompt Engineering, Fine-tuning, RAG, Vector Databases,
                  Attention Mechanism, Higgingface, Pretraining, VLLMs
                </p>
              </div>
              <div>
                <p class="font-medium text-[#0c4a6e]">Data Science</p>
                <p class="text-sm">
                  Data Preprocessing, Feature Engineering, A/B Testing,
                  Statistical Analysis, Predictive Analytics
                </p>
              </div>
              <div>
                <p class="font-medium text-[#0c4a6e]">Visualization</p>
                <p class="text-sm">
                  D3.js, Observable Notebooks, Chart.js, Plotly, Tableau, Data
                  Storytelling
                </p>
              </div>
              <div>
                <p class="font-medium text-[#0c4a6e]">Programming</p>
                <p class="text-sm">
                  Python, C++, MATLAB, PyTorch, TensorFlow, Keras, Scikit-Learn,
                  OpenCV, SQL, Git
                </p>
              </div>
            </div>
          {/if}
        </div>
      </div>
    {/if}
  </div>

  <!-- Experience Section -->
  <div
    class="mt-6 w-full max-w-3xl bg-white shadow-sm border border-gray-100 rounded-xl p-6 transition-shadow hover:shadow-md"
  >
    <button
      class="text-xl font-semibold hover:text-[#0284c7] transition-colors duration-200 flex items-center gap-2 cursor-pointer"
      on:click={() => (showExperience = !showExperience)}
    >
      Experience
      <span class="text-sm text-[#64748b]">{showExperience ? "−" : "+"}</span>
    </button>
    {#if showExperience}
      <div class="space-y-4 mt-4" in:slide>
        <div class="border-l-2 border-[#0284c7] pl-4">
          <div class="flex justify-between items-start">
            <div>
              <p class="font-semibold text-[#0c4a6e]">
                AI Instructional Assistant
              </p>
              <p class="text-sm text-[#64748b]">
                Northeastern University, CATLR
              </p>
            </div>
            <span class="text-sm text-[#64748b]">Jan 2025 - Present</span>
          </div>
          <p class="mt-2 text-[#64748b]">
            Selected as one of four graduate students university-wide to
            collaborate with faculty under the Chancellor's AI Integration
            Initiative. I co-develop GenAI-powered classroom activities and lead
            focus groups to understand student AI usage patterns.
          </p>
        </div>

        <div class="border-l-2 border-[#0284c7] pl-4">
          <div class="flex justify-between items-start">
            <div>
              <p class="font-semibold text-[#0c4a6e]">Cofounder and Chairman</p>
              <p class="text-sm text-[#64748b]">AMS Enterprises</p>
            </div>
            <span class="text-sm text-[#64748b]">Jul 2022 - Present</span>
          </div>
          <p class="mt-2 text-[#64748b]">
            Launched a new e-commerce division and led a 10-member team managing
            international exports, significantly increasing our global reach and
            market presence.
          </p>
        </div>

        <div class="border-l-2 border-[#0284c7] pl-4">
          <div class="flex justify-between items-start">
            <div>
              <p class="font-semibold text-[#0c4a6e]">Teaching Assistant</p>
              <p class="text-sm text-[#64748b]">
                Lahore University of Management Sciences
              </p>
            </div>
            <span class="text-sm text-[#64748b]">Jan 2023 - May 2023</span>
          </div>
          <p class="mt-2 text-[#64748b]">
            Mentored 60+ students in the Engineering lab course, boosting their
            proficiency in MATLAB, Arduino, and hardware prototyping through
            hands-on guidance and personalized support.
          </p>
        </div>

        <div class="border-l-2 border-[#0284c7] pl-4">
          <div class="flex justify-between items-start">
            <div>
              <p class="font-semibold text-[#0c4a6e]">
                Volunteer & Content Designer
              </p>
              <p class="text-sm text-[#64748b]">
                Baitussalam Education Foundation
              </p>
            </div>
            <span class="text-sm text-[#64748b]">May 2017 - Aug 2024</span>
          </div>
          <p class="mt-2 text-[#64748b]">
            Led academic content design and pioneered a successful robotics
            program to enhance student skills. Orchestrated the Baitussalam
            Olympiad, engaging over 1000 students and 150+ educational
            institutes nationwide.
          </p>
        </div>
      </div>
    {/if}
  </div>

  <!-- Projects Section -->
  <div
    class="mt-6 w-full max-w-3xl bg-white shadow-sm border border-gray-100 rounded-xl p-6 transition-shadow hover:shadow-md"
  >
    <button
      class="text-xl font-semibold hover:text-[#0284c7] transition-colors duration-200 flex items-center gap-2 cursor-pointer"
      on:click={() => (showProjects = !showProjects)}
    >
      Projects
      <span class="text-sm text-[#64748b]">{showProjects ? "−" : "+"}</span>
    </button>
    {#if showProjects}
      <div class="space-y-4 mt-4" in:slide>
        <!-- Weather Project -->
        <div class="pl-4">
          <button
            class="text-lg font-medium hover:text-[#0284c7] transition-colors duration-200 flex items-center gap-2 cursor-pointer w-full text-left"
            on:click={() => toggleProject("weather")}
          >
            Uncertainty-Aware Forecasting of Boston's Weekly Weather
            <span class="text-sm text-[#64748b]"
              >{expandedProjects.weather ? "−" : "+"}</span
            >
          </button>
          {#if expandedProjects.weather}
            <div class="mt-4 pl-4 border-l-2 border-[#0284c7]" in:slide>
              <img
                src="/Boston_Weather.png"
                alt="Weather Forecasting Project"
                class="w-full h-64 object-cover rounded-lg shadow-md mb-4"
              />
              <p class="text-[#64748b] text-justify">
                I built and benchmarked probabilistic and non-probabilistic
                models including Decision Trees, GPR, Bayesian Regression, MC
                Dropout, and BNNs to forecast weekly precipitation using NOAA's
                20-year Boston weather dataset. I engineered temporal features
                and rolling statistics, then evaluated all models across RMSE,
                MAE, NLL, and coverage metrics. The Laplace BNN delivered the
                best-calibrated confidence intervals while Decision Trees
                excelled in accuracy, providing valuable insights into
                uncertainty quantification in weather prediction.
              </p>
              <a
                class="text-[#0284c7] hover:underline text-sm font-medium inline-block mt-3"
                href="https://github.com/msalmancodes/probabilistic-weather-models"
                target="_blank"
              >
                View on GitHub →
              </a>
            </div>
          {/if}
        </div>

        <!-- Wildfire Project -->
        <div class="pl-4">
          <button
            class="text-lg font-medium hover:text-[#0284c7] transition-colors duration-200 flex items-center gap-2 cursor-pointer w-full text-left"
            on:click={() => toggleProject("wildfire")}
          >
            US Wildfire Visualization Dashboard
            <span class="text-sm text-[#64748b]"
              >{expandedProjects.wildfire ? "−" : "+"}</span
            >
          </button>
          {#if expandedProjects.wildfire}
            <div class="mt-4 pl-4 border-l-2 border-[#0284c7]" in:slide>
              <img
                src="/Final-Dashboard.png"
                alt="Wildfire Dashboard Project"
                class="w-full h-64 object-cover rounded-lg shadow-md mb-4"
              />
              <p class="text-[#64748b] text-justify">
                I developed an interactive dashboard using Svelte and D3.js to
                visualize over 74,000 US wildfire events from 2004 to 2015,
                featuring an interactive map, time series chart, and bar chart
                for rich, real-time exploration. The dashboard enables filtering
                by fire size, cause, region, and time, empowering researchers
                and policymakers to uncover seasonal and geographic trends. This
                tool provides critical insights for better mitigation strategies
                and enhances public awareness about wildfire patterns across the
                United States.
              </p>
              <a
                class="text-[#0284c7] hover:underline text-sm font-medium inline-block mt-3"
                href="https://github.com/msalmancodes/US-Wildfire-Dashboard"
                target="_blank"
              >
                View on GitHub →
              </a>
            </div>
          {/if}
        </div>

        <!-- Satellite Project -->
        <div class="pl-4">
          <button
            class="text-lg font-medium hover:text-[#0284c7] transition-colors duration-200 flex items-center gap-2 cursor-pointer w-full text-left"
            on:click={() => toggleProject("satellite")}
          >
            Future Image Generation for Remote Sensing Data
            <span class="text-sm text-[#64748b]"
              >{expandedProjects.satellite ? "−" : "+"}</span
            >
          </button>
          {#if expandedProjects.satellite}
            <div class="mt-4 pl-4 border-l-2 border-[#0284c7]" in:slide>
              <img
                src="/Motivation.png"
                alt="Satellite Image Generation Project"
                class="w-full h-64 object-cover rounded-lg shadow-md mb-4"
              />
              <p class="text-[#64748b] text-justify">
                I built an Attention GAN to synthesize satellite imagery from
                segmentation maps, improving urban planning accuracy by 30%. I
                processed and analyzed the SpaceNet 7 dataset to extract
                patterns in urban development across diverse geographies. This
                thesis project demonstrated how generative models can predict
                future urban landscapes from current segmentation data,
                providing valuable tools for city planners and researchers
                studying urban growth patterns.
              </p>
              <a
                class="text-[#0284c7] hover:underline text-sm font-medium inline-block mt-3"
                href="https://github.com/msalmancodes/Spatio-Temporal-Remote_Sensing_Image_Synthesis"
                target="_blank"
              >
                View on GitHub →
              </a>
            </div>
          {/if}
        </div>

        <!-- Chatbot Project -->
        <div class="pl-4">
          <button
            class="text-lg font-medium hover:text-[#0284c7] transition-colors duration-200 flex items-center gap-2 cursor-pointer w-full text-left"
            on:click={() => toggleProject("chatbot")}
          >
            Personal Financial Consultant Chatbot
            <span class="text-sm text-[#64748b]"
              >{expandedProjects.chatbot ? "−" : "+"}</span
            >
          </button>
          {#if expandedProjects.chatbot}
            <div class="mt-4 pl-4 border-l-2 border-[#0284c7]" in:slide>
              <img
                src="/Finbot.png"
                alt="Financial Chatbot Project"
                class="w-full h-64 object-cover rounded-lg shadow-md mb-4"
              />
              <p class="text-[#64748b] text-justify">
                I developed a comprehensive financial chatbot using OpenAI API,
                LangChain, and yfinance to provide real-time stock insights and
                tax advisory services. The chatbot features natural language
                processing capabilities to understand complex financial queries
                and provide personalized advice. I deployed the solution as a
                Streamlit-based app with Matplotlib visualizations, enhancing
                user engagement through dynamic financial analysis and
                interactive charts that help users make informed investment
                decisions.
              </p>
              <a
                class="text-[#0284c7] hover:underline text-sm font-medium inline-block mt-3"
                href="https://github.com/msalmancodes/Financial_Bot"
                target="_blank"
              >
                View on GitHub →
              </a>
            </div>
          {/if}
        </div>
      </div>
    {/if}
  </div>
</div>
<!-- ⭐ REMOVED: Closing {/if} for showMainContent -->
