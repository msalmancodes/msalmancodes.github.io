<script>
  import { fade, slide } from "svelte/transition";
  import { onMount } from "svelte";

  let showAbout = false;
  let showInterests = false;
  let showExperience = false;
  let showProjects = false;

  // Typing animation variables
  let displayedQuote = "";
  let typingComplete = false;
  let showMainContent = false;
  const fullQuote =
    "Every AI system we build is a blueprint for the future — let's design with intent, and build with care.";
  let quoteIndex = 0;

  // Typing animation effect
  onMount(() => {
    const typeWriter = () => {
      if (quoteIndex < fullQuote.length) {
        displayedQuote += fullQuote.charAt(quoteIndex);
        quoteIndex++;
        setTimeout(typeWriter, 80); // Adjust speed here
      } else {
        // Typing complete, wait a moment then show main content
        setTimeout(() => {
          typingComplete = true;
          setTimeout(() => {
            showMainContent = true;
          }, 300);
        }, 80); // Pause after typing completes
      }
    };
    setTimeout(typeWriter, 200); // Start after 500ms delay
  });
</script>

<!-- Full screen typing animation -->
{#if !showMainContent}
  <div
    class="fixed inset-0 bg-[#f8fafc] flex items-center justify-center px-6 z-50"
    out:fade={{ duration: 100 }}
  >
    <p
      class="text-3xl md:text-4xl lg:text-5xl text-center font-medium italic text-[#0c4a6e] max-w-4xl leading-relaxed"
    >
      "{displayedQuote}"
    </p>
  </div>
{/if}

<!-- Main content -->
{#if showMainContent}
  <div
    class="min-h-screen bg-[#f8fafc] text-[#0c4a6e] flex flex-col items-center justify-center px-6 py-12 font-sans"
    in:fade={{ duration: 800, delay: 200 }}
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

    <!-- About Me Section -->
    <div
      class="mt-10 w-full max-w-3xl bg-white shadow-sm border border-gray-100 rounded-xl p-6 transition-shadow hover:shadow-md"
    >
      <button
        class="text-xl font-semibold hover:text-[#0284c7] transition-colors duration-200 flex items-center gap-2 cursor-pointer"
        on:click={() => (showAbout = !showAbout)}
      >
        About Me
        <span class="text-sm text-[#64748b]">{showAbout ? "−" : "+"}</span>
      </button>
      {#if showAbout}
        <p
          class="mt-4 max-w-2xl text-justify text-[#64748b] leading-relaxed"
          in:slide
        >
          I'm a graduate student at Northeastern University pursuing an MS in
          Electrical and Computer Engineering with a focus on Computer Vision,
          Machine Learning, and Algorithms. I bring experience in both academic
          research and industry, with projects ranging from probabilistic
          weather modeling to generative satellite imagery. Currently, I serve
          as an AI Instructional Assistant at CATLR, where I co-design
          GenAI-integrated teaching strategies. I'm passionate about the
          intersection of AI, education, and climate resilience.
        </p>
      {/if}
    </div>

    <!-- Interests Section -->
    <div
      class="mt-6 w-full max-w-3xl bg-white shadow-sm border border-gray-100 rounded-xl p-6 transition-shadow hover:shadow-md"
    >
      <button
        class="text-xl font-semibold hover:text-[#0284c7] transition-colors duration-200 flex items-center gap-2 cursor-pointer"
        on:click={() => (showInterests = !showInterests)}
      >
        Interests
        <span class="text-sm text-[#64748b]">{showInterests ? "−" : "+"}</span>
      </button>
      {#if showInterests}
        <p
          class="mt-4 max-w-2xl text-justify text-[#64748b] leading-relaxed"
          in:slide
        >
          <!-- Add your interests content here -->
          [Your interests content will go here]
        </p>
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
              Initiative. I co-develop GenAI-powered classroom activities and
              lead focus groups to understand student AI usage patterns.
            </p>
          </div>

          <div class="border-l-2 border-[#0284c7] pl-4">
            <div class="flex justify-between items-start">
              <div>
                <p class="font-semibold text-[#0c4a6e]">
                  Cofounder and Chairman
                </p>
                <p class="text-sm text-[#64748b]">AMS Enterprises</p>
              </div>
              <span class="text-sm text-[#64748b]">Jul 2022 - Present</span>
            </div>
            <p class="mt-2 text-[#64748b]">
              Launched a new e-commerce division and led a 10-member team
              managing international exports, significantly increasing our
              global reach and market presence.
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
              Mentored 60+ students in the Engineering lab course, boosting
              their proficiency in MATLAB, Arduino, and hardware prototyping
              through hands-on guidance and personalized support.
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
        <div class="space-y-6 mt-4" in:slide>
          <div class="border-l-2 border-[#0284c7] pl-4">
            <p class="font-semibold text-[#0c4a6e]">
              Uncertainty-Aware Forecasting of Boston's Weekly Weather
            </p>
            <p class="mt-2 text-[#64748b] text-justify">
              I built and benchmarked probabilistic and non-probabilistic models
              including Decision Trees, GPR, Bayesian Regression, MC Dropout,
              and BNNs to forecast weekly precipitation using NOAA's 20-year
              Boston weather dataset. I engineered temporal features and rolling
              statistics, then evaluated all models across RMSE, MAE, NLL, and
              coverage metrics. The Laplace BNN delivered the best-calibrated
              confidence intervals while Decision Trees excelled in accuracy,
              providing valuable insights into uncertainty quantification in
              weather prediction.
            </p>
            <a
              class="text-[#0284c7] hover:underline text-sm font-medium inline-block mt-2"
              href="https://github.com/msalmancodes/probabilistic-weather-models"
              target="_blank"
            >
              View on GitHub →
            </a>
          </div>

          <div class="border-l-2 border-[#0284c7] pl-4">
            <p class="font-semibold text-[#0c4a6e]">
              US Wildfire Visualization Dashboard
            </p>
            <p class="mt-2 text-[#64748b] text-justify">
              I developed an interactive dashboard using Svelte and D3.js to
              visualize over 74,000 US wildfire events from 2004 to 2015,
              featuring an interactive map, time series chart, and bar chart for
              rich, real-time exploration. The dashboard enables filtering by
              fire size, cause, region, and time, empowering researchers and
              policymakers to uncover seasonal and geographic trends. This tool
              provides critical insights for better mitigation strategies and
              enhances public awareness about wildfire patterns across the
              United States.
            </p>
            <a
              class="text-[#0284c7] hover:underline text-sm font-medium inline-block mt-2"
              href="https://github.com/msalmancodes/US-Wildfire-Dashboard"
              target="_blank"
            >
              View on GitHub →
            </a>
          </div>

          <div class="border-l-2 border-[#0284c7] pl-4">
            <p class="font-semibold text-[#0c4a6e]">
              Future Image Generation for Remote Sensing Data
            </p>
            <p class="mt-2 text-[#64748b] text-justify">
              I built an Attention GAN to synthesize satellite imagery from
              segmentation maps, improving urban planning accuracy by 30%. I
              processed and analyzed the SpaceNet 7 dataset to extract patterns
              in urban development across diverse geographies. This thesis
              project demonstrated how generative models can predict future
              urban landscapes from current segmentation data, providing
              valuable tools for city planners and researchers studying urban
              growth patterns.
            </p>
            <a
              class="text-[#0284c7] hover:underline text-sm font-medium inline-block mt-2"
              href="https://github.com/msalmancodes/Spatio-Temporal-Remote_Sensing_Image_Synthesis"
              target="_blank"
            >
              View on GitHub →
            </a>
          </div>

          <div class="border-l-2 border-[#0284c7] pl-4">
            <p class="font-semibold text-[#0c4a6e]">
              Personal Financial Consultant Chatbot
            </p>
            <p class="mt-2 text-[#64748b] text-justify">
              I developed a comprehensive financial chatbot using OpenAI API,
              LangChain, and yfinance to provide real-time stock insights and
              tax advisory services. The chatbot features natural language
              processing capabilities to understand complex financial queries
              and provide personalized advice. I deployed the solution as a
              Streamlit-based app with Matplotlib visualizations, enhancing user
              engagement through dynamic financial analysis and interactive
              charts that help users make informed investment decisions.
            </p>
            <a
              class="text-[#0284c7] hover:underline text-sm font-medium inline-block mt-2"
              href="https://github.com/msalmancodes/Financial_Bot"
              target="_blank"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      {/if}
    </div>
  </div>
{/if}
