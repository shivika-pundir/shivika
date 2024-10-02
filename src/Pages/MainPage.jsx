import React from "react";
// Images of First research paper
import PubR1 from "../assets/Publication_1/r1.png";
import PubR2 from "../assets/Publication_1/r2.png";
import PubR3 from "../assets/Publication_1/r3.png";
import PubR4 from "../assets/Publication_1/r4.png";
// Images of Second research paper
import Pub2I1 from "../assets/Publication_2/i1.png";
import Pub2I2 from "../assets/Publication_2/i2.png";
import Pub2I3 from "../assets/Publication_2/i3.png";
// Images of Third research paper
import Pub3I1 from "../assets/Publication_3/image1.png";
import Pub3I2 from "../assets/Publication_3/image2.png";
import Pub3I3 from "../assets/Publication_3/image3.png";
// import Pub3I4 from "../assets/Publication_3/image4.png";

// Images of first Conference
import Conf1I1 from "../assets/Conference_1/I1.png";
import Conf1I2 from "../assets/Conference_1/I2.png";
import Conf1I3 from "../assets/Conference_1/I3.png";
import Conf1I4 from "../assets/Conference_1/I4.png";
// Images of Second Conference
import Conf2I1 from "../assets/Conference_2/I1.png";
import Conf2I2 from "../assets/Conference_2/I2.png";
// Images of Third Conference
import Conf3I1 from "../assets/Conference_3/I1.png";
import Conf3I2 from "../assets/Conference_3/I2.png";
// Images of First Project
import Pro1I1 from "../assets/Project_1/I1.png";
import Pro1I2 from "../assets/Project_1/I2.png";
import Pro1I3 from "../assets/Project_1/I3.png";
// Images of Second Project
import Pro2I1 from "../assets/Project_2/image1.png";
import Pro2I2 from "../assets/Project_2/image2.png";
// Image of Third Project
import Pro3I1 from "../assets/Project_3/image1.png";
import Pro3I2 from "../assets/Project_3/image2.png";
import Pro3I3 from "../assets/Project_3/image3.png";
// import Pro3I4 from "../assets/Project_3/image4.png";
// Image of Fourth Project
import Pro4I1 from "../assets/Project_4/image1.png";
import Pro4I2 from "../assets/Project_4/image2.png";
import Pro4I3 from "../assets/Project_4/image3.png";
import Pro4I4 from "../assets/Project_4/image4.png";
import Pro4I5 from "../assets/Project_4/image5.png";
// Image of Fifth Project
import Pro5I1 from "../assets/Project_5/image.png";
import Pro5I2 from "../assets/Project_5/image2.png";
// DOCUMENTS / CERTIFICATES
import Marksheet10 from "../assets/Documents/Marksheet10.pdf";
import Marksheet12 from "../assets/Documents/Marksheet12.pdf";
import NUS from "../assets/Documents/NUS Training Certificate.pdf";
import ANU_Offer from "../assets/Documents/2024_FRT Offer_Prahlada.pdf";
import iitTranscript from "../assets/Documents/iitTranscript.pdf";
import Shivika_12th_state_gov_award from "../assets/Documents/Shivika_12th_state_gov.pdf";
import smp from "../assets/Documents/smp_certificate.pdf";
import cv from "../assets/Documents/Shivika_CV.pdf";
// ICONS
import { MdEmail, MdPhone, MdLink } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const MainPage = ({ sectionRefs }) => {
  return (
    <div className="bg-white flex-1 shadow-lg rounded-lg p-6 overflow-auto text-[1.11rem]">
      {/* About Section */}
      <section id="about" className="mb-8" ref={sectionRefs.about}>
        <h2 className="text-2xl font-bold mb-4">
        Hello and Welcome to My Webpage!
        </h2>
        <p className="text-justify text-gray-900 mb-4">
          I am Shivika, a final year Integrated Masters (B.Tech. + M. Tech.) student
          at the 
          <a href="https://www.iitr.ac.in/"
          className="text-blue-600 hover:underline"
          > Indian Institute of Technology, Roorkee</a> pursuing my degree major in Geophysics
           and minor in Management. Currently, I am
          doing my Master’s Thesis Project under the supervision of  
          {/* from the  */}
          {/* <a href="https://www.anu.edu.au/"
          className="text-blue-600 hover:underline"
          > Australian National
          University</a> under{" "} */}
          {" "}
          <a
            href="https://www.iitr.ac.in/~ES/Simanchal_Padhy"
            className="text-blue-600 hover:underline"
          >
          Prof. Simanchal Padhy
          </a>{" "}
          {/* <a
            href="https://earthsciences.anu.edu.au/people/dr-sia-ghelichkhan"
            className="text-blue-600 hover:underline"
          >
            Dr. Sia Ghelichkhan */}
          {/* </a>{" "}
          and{" "}
          <a
            href="https://earthsciences.anu.edu.au/people/professor-rhodri-davies"
            className="text-blue-600 hover:underline"
          >
            Prof. Rhodri Davies */}
          {/* </a> */}
          . Being inspired by my parents, teachers, and project 
          supervisors my career goal is to be a teacher and a 
          researcher, seeing their excitement for work and lifestyle.
        </p>
        <p className="text-justify text-gray-900">
        To fulfill my goals, I strongly wish to do a Ph.D. in a good 
        research group as I feel a Ph.D. gives us the opportunity to 
        get immersed in a research problem and find the solution to it. 
        During my UG courses, I got a good foundation in Geophysics, 
        Petrophysics, and Machine Learning.  In order to pursue my interests, 
        since my third year, I have taken up a few research projects in 
        different fields, especially in petrophysics, seismic wave analysis, 
        and remote sensing. During the course of these projects, I have learned 
        quite a few research skills especially applying theory to practice, 
        reading papers and understanding important information, picking up a 
        new topic and learning efficiently, presenting my work, and also writing 
        papers. . I have also submitted a conference paper in AGU and am working 
        on a journal paper on the same work. Alongside my academic pursuits, 
        I developed a strong interest in teaching. For more information about me 
        and my work, feel free to explore further! You can access my CV{" "}
          <a href={cv} download className="text-blue-600 hover:underline">
            here
          </a>
          .
        </p>
        <p>
          <h3 className="font-bold mt-2 mb-1">Research Interests : </h3>
          <p>
          Applied Geophysics, Seismic Waveform Modelling, Machine Learning,
          Time-Series Analysis, Petrophysics, Image Processing
          </p>
        </p>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" ref={sectionRefs.education} className="mb-12">
        <h2 className="font-bold text-2xl text-gray-900 mb-4">Education</h2>
        <div className="space-y-8 text-gray-800">
          {/* ANU
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-xl">
              Australian National University (ANU), Australia
              <span className="text-sm text-gray-600 block">
                Jun 2024 – Jun 2025
              </span>
            </h4>
            <p className="text-gray-700">
              Master’s Thesis Project (Exchange) in Geodynamics
            </p>
            <a
              href={ANU_Offer}
              donwload
              className="text-blue-500 hover:underline"
            >
              Certificate
            </a>
          </div> */}

          {/* IIT Roorkee */}
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-xl">
              Indian Institute of Technology Roorkee (IIT), India
              <span className="text-sm text-gray-600 block">
                Aug 2020 – Jun 2025
              </span>
            </h4>
            <p className="text-gray-700">
              Integrated Masters (B.Tech + M.Tech) in Geophysical Technology
            </p>
            <p className="text-gray-700">CGPA – 8.76/10 (Within Top 15%)</p>
            <a
              href={iitTranscript}
              donwload
              className="text-blue-500 hover:underline"
            >
              Transcript
            </a>
          </div>

          {/* NUS
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-xl">
              National University of Singapore (NUS), Singapore
              <span className="text-sm text-gray-600 block">
                Dec 2022 – Jan 2023
              </span>
            </h4>
            <p className="text-gray-700">
              Academic Internship in Deep Learning and Data Analytics
            </p>
            <p className="text-gray-700">Grade – A (Training by NUS and HPE)</p>
            <a href={NUS} className="text-blue-500 hover:underline">
              Certificate
            </a>
          </div> */}

          {/* Scholars Academy Grade 12 */}
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-xl">
              Bhagwanti SVM Inter college(UP), India
              <span className="text-sm text-gray-600 block">Apr 2019</span>
            </h4>
            <p className="text-gray-700">Higher Secondary Education</p>
            <p className="text-gray-700">
              Grade 12 Percentage – 84.4% (2nd in District)
            </p>
            <a
              href={Marksheet12}
              
              className="text-blue-500 hover:underline"
            >
              Certificate
            </a>
          </div>

          {/* Scholars Academy Grade 10 */}
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-xl">
            Bhagwanti SVM Inter college(UP), India
              <span className="text-sm text-gray-600 block">Jun 2017</span>
            </h4>
            <p className="text-gray-700">Secondary Education</p>
            <p className="text-gray-700">
              Grade 10 Percentage – 90.5% (1st in District)
            </p>
            <a
              href={Marksheet10}
              
              className="text-blue-500 hover:underline"
            >
              Certificate
            </a>
          </div>
        </div>
      </section>

      {/* TECHNICAL SKILLS SECTION */}
      <section
        id="technicalSkills"
        ref={sectionRefs.technicalSkills}
        className="mb-12"
      >
        <h2 className="font-bold text-2xl  text-gray-900 mb-4">
          Technical Skills
        </h2>
        <div className="space-y-8 text-gray-800">
          {/* Programming Languages */}
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold text-xl mb-2">
              Programming Languages
            </h4>
            <p className="text-gray-700">
              Python (Competent), C++ (Competent), MATLAB (Competent)
            </p>
          </div>

          {/* Softwares and Tools */}
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold text-xl mb-2">Softwares and Tools</h4>
            <p className="text-gray-700">
            Jupyter Notebooks, LATEX, MS Excel, MS Powerpoint, OR-Tools
            </p>
          </div>

          {/* Python Libraries */}
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold text-xl mb-2">ML/AI</h4>
            <p className="text-gray-700">
            Numpy, Pandas, Scikit-learn, Seaborn, Matplotlib
            </p>
          </div>

          {/* Geophysics */}
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold text-xl mb-2">Geophysical Skills</h4>
            <p className="text-gray-700">
            Rasterio, Geopandas, Shapely, ArcGIS, Seisan, Res3DInv
            </p>
          </div>
        </div>
      </section>

      {/* researchExperience Section */}
      <div
        ref={sectionRefs.researchExperience}
        id="researchExperience"
        className="mb-8"
      >
        <h3 className="text-2xl font-semibold mb-4">Research Experience</h3>

        {/* <div id="journalPapers"> */}
          {/* <h4 className="text-2xl font-bold">- Journal Papers :</h4> */}

          {/* <p className="text-gray-800 mb-4">
            Below are some of the research papers I have authored or
            co-authored. You can explore my full list of publications on{" "}
            <a
              href="https://scholar.google.com/citations?hl=en&user=VaoQmPUAAAAJ"
              className="text-blue-600 hover:underline"
            >
              Google Scholar
            </a>
            .
          </p> */}

          {/* <ul className="list-none space-y-6"> */}
            {/* <li> */}
              {/* <div className="bg-gray-100 p-4 shadow rounded-lg hover:bg-gray-200 transition"> */}
                {/* <h4 className="text-xl font-semibold">
                  1. Unsupervised learning framework for region-based damage
                  assessment on xBD, a large satellite imagery
                </h4> */}
                {/* <p className="text-gray-700 mt-2">
                  Prahlada V. Mittal, R Bafna and A Mittal <br/> Natural
                  Hazards 118 (2), Springer Journal, 1619-1643, 2023.
                  <a
                    href="https://doi.org/10.1007/s11069-023-06074-y"
                    className="text-blue-600 hover:underline ml-2"
                  >
                    Read Paper
                  </a>
                </p> */}
                {/* Images of the research paper for breif description */}
                {/* <div className="flex flex-wrap gap-2 mt-4"> */}
                  {/* <div className="flex items-center justify-center gap-3"> */}{" "}
                  
                  
                  {/* <p className="text-gray-600 text-lg mt-2">
                    Population-based damage assessment using remote sensing data
                    is crucial in disaster management. This paper presents an
                    unsupervised density-based clustering algorithm for damage
                    assessment, which automatically selects the optimum number
                    of clusters based on spatial distribution and assigns damage
                    levels to affected areas.
                  </p> */}

                  {/* <img
                    src={PubR1}
                    alt="Sample output from framework"
                    className="mt-4 rounded sm:w-6/12 h-auto w-full  shadow-lg"
                  /> */}
                  {/* </div> */}
                  {/* <div className="flex items-center justify-center gap-3"> */}
                  
                  {/* <p className="text-gray-600 sm:text-lg mt-2 text-lg">
                    In our work, we present an unsupervised density-based
                    clustering algorithm that automatically makes spatial groups
                    of affected regions and assigns the label based on the
                    degree of damage to the region like shown below (a sample
                    output from our framework).
                  </p> */}
                  {/* </div>
                <div className="flex items-center justify-center gap-3"> */}
                  {/* <img
                    src={PubR2}
                    alt="Second photo of first research paper"
                    className="w-full h-auto sm:w-1/2 rounded  shadow-lg mt-4"
                  /> */}
                  
                  
                  {/* <p className="text-gray-600 text-lg mt-2">
                    The algorithm automatically selects the optimum number of
                    clusters based on the spatial distribution of the data and
                    works well with any shape of the hazard-affected region. The
                    demographic estimate for the affected region is then
                    presented based on the area of the region and the census
                    data. An overview of our approach is shown below.{" "}
                  </p>

                  <img
                    src={PubR3}
                    alt="Third photo of first research paper"
                    className="w-full h-auto sm:w-2.2/3 rounded  shadow-lg mt-4"
                  /> */}
                  {/* </div>
                <div className="flex items-center justify-center gap-3"> */}
                  
                  {/* <p className="text-gray-600 text-lg mt-2">
                    The navigation information is provided with aid of Google
                    maps depicting the overall damage along with possibility of
                    transportation as shown below.
                  </p>

                  <img
                    src={PubR4}
                    alt="Fourth photo of first research paper"
                    className="w-full h-auto sm:w-2/3 rounded shadow-lg mt-4"
                  /> */}
                  {/* </div> */}
                {/* </div> */}
              {/* </div> */}
            {/* </li> */}

            {/* <li> */}
              {/* <div className="bg-gray-100 p-4 shadow rounded-lg hover:bg-gray-200 transition"> */}
                {/* <h4 className="text-xl font-semibold">
                  2. Machine Learning Models for Mining Social Media Data for
                  Effective Natural Disaster (In Review)
                </h4>
                <p className="text-gray-700 mt-2">
                  Prahlada V. Mittal, S Karki, S Parasher, S Narang, A Mittal
                  <br/>Under Review in Natural Hazards Review, ASCE 
                  <a
                    href="https://doi.org/10.21203/rs.3.rs-3754456/v1"
                    className="text-blue-600 hover:underline ml-2"
                  >
                    Read Paper
                  </a>
                </p> */}
                {/* Images for Second Research Paper */}
                {/* <div> */}
                  {/* <img
                    src={Pub2I1}
                    alt="First photo of second Research paper"
                    className="w-full h-auto sm:w-2/3 rounded shadow-lg mt-4"
                  />
                  <p className="text-gray-600 text-lg mt-2">
                    Satellite technology has emerged as a key tool for effective
                    management and assessment of natural disasters. However, the
                    challenge of accurately estimating impacted populations and
                    assessing building damage, often obscured from aerial views,
                    persists. To address this, the integration of imagery and
                    textual data from social networks offers a promising
                    solution as depicted below.
                  </p>
                  <img */}
                    {/* src={Pub2I2}
                    alt="First photo of second Research paper"
                    className="w-full h-auto sm:w-4.5/8 rounded shadow-lg mt-4"
                  /> */}
                  {/* <p className="text-gray-600 text-lg mt-2">
                    The sentiment analysis component categorizes
                    disaster-affected individuals' emotions as panic, neutral,
                    or non-panic. We also introduced an Aid analysis model for
                    the classification of tweets based on the aid sought by
                    people through tweets. A broad overview of our approach in
                    which we combined all the information can be seen below.
                    Also, this paper is further research of a conference paper
                    we had submitted earlier.
                  </p>
                  <img
                    src={Pub2I3}
                    alt="First photo of second Research paper"
                    className="w-full h-auto sm:w-4.5/8 rounded mt-4 shadow-lg"
                  />
                  <p className="text-gray-600 text-lg mt-2">
                    An important aspect of the research was aid-analysis which
                    could be very useful to the aid-providing organizations and
                    government to provide specialized and focused aid. The
                    framework we used for that can be seen below. Thus, this
                    approach holds potential to significantly enhance disaster
                    relief efficacy.
                  </p> */}
                {/* </div>
              </div>
            </li> */}


            {/* <li>
              <div className="bg-gray-100 p-4 shadow rounded-lg hover:bg-gray-200 transition"> */}
                {/* <h4 className="text-xl font-semibold">
                  3. From Field to Diagnosis: Leveraging Farmer Query to 
                  Detect Crop Diseases in a Changing Climate (In Review)
                </h4>
                <p className="text-gray-700 mt-2">
                  DS Rawat, A Agarwal, Prahlada V. Mittal, A Mittal, N Yeril
                  <br/>Under Review in IEEE Transactions on AgriFood Electronics
                
                </p> */}
                {/* Images for Second Research Paper */}
                {/* <div> */}
                  
                  {/* <p className="text-gray-600 text-lg mt-2">
                  Climate change is an escalating global crisis with far-reaching 
                  consequences that extend to every facet of the natural and human 
                  world. One of the most pressing dimensions of climate change is 
                  its profound and multifaceted impact on human livelihoods, 
                  agriculture, and the broader socio-economic fabric. In this study, 
                  we examine the impact of climatic factors on disease and pest 
                  infestations affecting apple orchards in Himachal Pradesh, India. 
                  Utilizing data from the Kisan Call Center, a government-run farmer
                   helpline spanning 2009 to 2022, we analyzed a variety of 
                   farmer-reported issues. 
                  </p>
                  <img
                    src={Pub3I1}
                    alt="First photo of third Research paper"
                    className="w-full h-auto sm:w-4.5/8 rounded shadow-lg mt-4"
                  />

            
                  <p className="text-gray-600 text-lg mt-2">
                  We systematically labelled these queries with 27 distinct 
                  categories using our N-gram AgriLogic Framework, ensuring 
                  each was scientifically accurate and relevant. To provide 
                  timely aid and facilities to the farmers, we built a 
                  classification model to classify the farmer queries. 
                  The following word cloud represents the most sought-after 
                  keywords in the farmer queries. 
                  </p>
              


                  <img
                    src={Pub3I2}
                    alt="Third photo of third Research paper"
                    className="w-full h-auto sm:w-2/3 rounded mt-4 shadow-lg"
                  />
                  <p className="text-gray-600 text-lg mt-2">
                  Our data analysis highlighted the drastic impact of extreme 
                  weather events, such as intense rainfall and hail. We also 
                  performed a temporal analysis, which illuminated the complex 
                  interrelations among various infestations, providing new 
                  insights into the progression of crop diseases. 
                  </p>

                  <img
                    src={Pub3I3}
                    alt="Third photo of third Research paper"
                    className="w-full h-auto sm:w-4.5/8 rounded mt-4 shadow-lg"
                  />

                  <p className="text-gray-600 text-lg mt-2">
                  The overall flow of the paper can be seen in the figure below. 

                  </p>
                  <img
                    src={Pub3I4}
                    alt="fourth photo of third Research paper"
                    className="w-full h-auto sm:w-2/3 rounded mt-4 shadow-lg"
                  />

                  <p className="text-gray-600 text-lg mt-2">
                  Overall, the research offers a comprehensive framework for 
                  forecasting and countering the detrimental effects of 
                  climatic challenges on apple cultivation, enhancing the 
                  resilience and sustainability of agriculture in the region. 
                  </p> */}
                {/* </div>
              </div>
            </li> */}



          {/* </ul>
        </div> */}
        {/* Conferences : SubSection */}
        {/* <div id="conferences" className="mt-4"> */}
          {/* <h4 className="text-2xl font-bold">- Conferences :</h4> */}
          {/* <ul className="list-none space-y-6">
            <li>
              <div className="bg-gray-100 p-4 shadow rounded-lg hover:bg-gray-200 transition"> */}
                {/* <h4 className="text-xl font-semibold">
                  1. Natural Disaster Twitter Data Classification using CNN and
                  Logistic Regression
                </h4>
                <p className="text-gray-700 mt-2">
                  S Parasher, Prahlada V Mittal, S Karki, S Narang, A Mittal <br/>
                  12th International Conference on Soft Computing for Problem Solving
                  (SocProS 2023), Aug 11-13, 2023
                  <a
                    href="https://doi.org/10.1007/978-981-97-3292-0_46"
                    className="text-blue-600 hover:underline ml-2"
                  >
                    Read Paper
                  </a>
                </p>
                Images for Conference 1 */}
                {/* <div> */}
               
                  {/* <p className="text-gray-600 text-lg mt-2">
                    Satellite-based natural disaster management and assessment
                    are prevalent.
                  </p>
                  <img
                    src={Conf1I1}
                    alt="First photo of Conference 1"
                    className="w-full h-auto sm:w-2/3 rounded mt-4 shadow-lg"
                  />

               
                  <p className="text-gray-600 text-lg mt-2">
                    A significant hurdle is faced in estimating the population
                    affected as well as the internal damage of buildings which
                    cannot be assessed from the top. Social media images and
                    texts can estimate the affected population well. We used
                    Twitter and Flickr datasets for sentiment analysis and
                    classification using SVM, CNN, XGBoost, Logistic Regression,
                    Gradient Boost, etc.
                  </p>
                  <img
                    src={Conf1I2}
                    alt="Second photo of Conference 1"
                    className="w-full h-auto sm:w-4/8 rounded mt-4 shadow-lg"
                  />

                  
                  <p className="text-gray-600 text-lg mt-2">
                    The sentiment analysis gave us information about the panic
                    situation among the people.
                  </p>

                  <img
                    src={Conf1I3}
                    alt="Third photo of Conference 1"
                    className="w-full h-auto sm:w-2/3 rounded mt-4 shadow-lg"
                  />
                  
                  <p className="text-gray-600 text-lg mt-2">
                    We also performed clustering using the DBSCAN algorithm. The
                    following figure represents the spatial distribution of
                    instances within each cluster offering insights into the
                    spatial characteristics and proximity of different aspects
                    of the disaster event.
                  </p>

                  <img
                    src={Conf1I4}
                    alt="Fourth photo of Conference 1"
                    className="w-full h-auto sm:w-2/3 rounded mt-4 shadow-lg"
                  /> */}
                {/* </div>
              </div>
            </li>
            <li>
              <div className="bg-gray-100 p-4 shadow rounded-lg hover:bg-gray-200 transition"> */}
                {/* <h4 className="text-xl font-semibold">
                  2. Optimizing Groundwater Management: Integrating GRACE
                  Satellite Data and Machine Learning for Groundwater Level
                  Prediction and Analysis
                </h4>
                <p className="text-gray-700 mt-2">
                  M Sharma, Prahlada V Mittal, K Raj, T
                  Daqiq, A Karunakalage, R Sharma <br/> International
                  Conference on Computations and Data Science (CoDS-2024), March
                  08-10,2024
                </p> */}
                {/* Images for Conference 2 */}
                {/* <div> */}
                 
                  {/* <p className="text-gray-600 text-lg mt-2">
                    In pursuit of a comprehensive analysis of groundwater
                    dynamics in the state of Uttar Pradesh, India, we integrated
                    GRACE satellite data, which is continuous and available
                    round the year and machine learning approaches for
                    groundwater level (GWL) analysis and prediction, charting a
                    progressive course for water resource management. The GWL
                    data is very limited and there are very limited number of
                    groundwater monitoring wells available in India. In this
                    study, we focused our research on the UP region.
                  </p>

                  <img
                    src={Conf2I1}
                    alt="First photo of Conference 2"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  />
                  
                  <p className="text-gray-600 text-lg mt-2">
                    Moreover, the groundwater monitoring is done only twice a
                    year. So, in this paper, we tried to find correlations and
                    hidden relationships using ML between the GRACE and GWL data
                    so that we can have a good idea of the GWL. Moreover, we
                    tried to provide robust methods for quantifying uncertainty
                    in predictions associated with GWL, an aspect crucial for
                    informed decision-making and risk assessment. The
                    overarching objective was to contribute to the enhancement
                    of sustainable water resources management through the
                    integration of advanced machine-learning techniques and
                    satellite-derived information.
                  </p>
                  <img
                    src={Conf2I2}
                    alt="Second photo of Conference 2"
                    className="w-full  sm:w-2/4 h-auto rounded mt-4 shadow-lg"
                  /> */}
                {/* </div>
              </div>
            </li> */}

            {/* <li>
              <div className="bg-gray-100 p-4 shadow rounded-lg hover:bg-gray-200 transition"> */}
                {/* <h4 className="text-xl font-semibold">
                  3. Enhancing Groundwater Data Consistency between GRACE and
                  GRACE-Fo Missions in Uttar Pradesh, India
                </h4>
                <p className="text-gray-700 mt-2">
                  K Raj, Prahlada V Mittal, M Sharma, A
                  Karunakalage, T Daqiq, R Sharma <br/> International
                  Conference on Computations and Data Science (CoDS-2024), March
                  08-10,2024
                </p> */}
                {/* Images for Conference 3 */}
                {/* <div> */}
                  
                  {/* <p className="text-gray-600 text-lg mt-2">
                    The monitoring of global mass variations has undergone a
                    transformative evolution with the implementation of the
                    Gravity Recovery and Climate Experiment (GRACE) and its
                    successor, GRACE Follow-On (GRACE-FO). Despite their
                    revolutionary impact, the observational continuity is
                    challenged by inherent gaps, such as the 11-month interval
                    between the two missions between 2017 and 2018. This
                    temporal disruption has impeded seamless observations,
                    affecting the comprehensive analysis and practical
                    application of the valuable data generated by these
                    missions.
                  </p>
                  <img
                    src={Conf3I1}
                    alt="First photo of Conference 3"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  />
                  
                  <p className="text-gray-600 text-lg mt-2">
                    We aimed to bridge the data gap between these two missions
                    and assess the groundwater storage variations (GWSA) in the
                    state of Uttar Pradesh, India. We used GRACE satellite data,
                    specifically Total Water Storage (TWS) measurements.
                    Additionally, TWS data derived from other satellite sources
                    within the same timeframe were incorporated. The primary
                    objective was to train the machine using Machine Learning
                    algorithms such as SVM, Logistic Regression, and CNN to make
                    our model ready firstly, to predict TWS values for the
                    timeframe where GRACE TWS data is unavailable. This extended
                    the utility of the models beyond the initial training
                    period.
                  </p>
                  <img
                    src={Conf3I2}
                    alt="Second photo of Conference 3"
                    className="w-full  sm:w-2/3 h-auto rounded mt-4 shadow-lg"
                  /> */}
                {/* </div>
              </div>
            </li>
          </ul>
        </div> */}

        {/* Research project : Subsection */}
        <div id="researchProjects" className="mt-2">
          <h4 className="text-2xl font-bold">- Research Projects :</h4>
          <ul className="list-none space-y-6">
            <li>
              <div className="bg-gray-100 p-4 shadow rounded-lg hover:bg-gray-200 transition">
                <h4 className="text-xl font-semibold">
                  1. Seismic Waveform Modeling with a Bayesian Framework 
                  (Master’s Project) <br/> Jul 2024 – Jun 2025
                </h4>
                <p className="text-gray-700 mt-2">
                  Prof. Simanchal Padhy (Indian Institute of 
                  Technology Roorkee, India) 
                </p>
                <div>
          
                  <p className="text-justify text-gray-600 text-lg mt-2">
                  The objective of my thesis is to model the seismic Waveform 
                  using Bayesian Framework in one of the Himalayan region. 
                  Till now I studied some literature about application of 
                  same technique for detection of weak seismic events and 
                  the events having no historical seismicity (de novo events). 
                  SIGVISA (Signal-based Vertically Integrated Seismic Analysis) 
                  is a seismic monitoring system which is used for detecting 
                  low magnitude events and reducing mean location error.
                  </p>
                  <p className="text-justify text-gray-600 text-lg mt-2">
                  Another application of this method in the form of Earthquake 
                  Early Warning System (EEW). This had been conducted for detecting 
                  the earthquakes and flse alarms which are due to real events (quarry 
                  blasts and regional or teleseismic earthquakes) or non-existing 
                  events (i.e. noisebursts) For this purpose Virtual Seismologist 
                  method is used for predicted envelope which is based on Bayesian 
                  statistics. In this method predicted and observed envelopes are 
                  compared and set a threshold for goodness-of-fit and using that 
                  you can if prediction is accurate or it is a false alarm. Figure(a) 
                  shows comparison between observed and predicted envelopes for earthquakes.
                  </p>
                  <img
                    src={Pro1I1}
                    alt="First photo of Project 1"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  />
          
                  <p className="text-justify text-gray-600 text-lg mt-2">
                  Figure(b) represents comparison between observed 
                  and predicted envelopes for false alarms.
                  </p>

                  <img
                    src={Pro1I2}
                    alt="Second photo of Project 1"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  />
               
                  {/* <p className="text-gray-600 text-lg mt-2">
                    Then we compare this synthetic model with real-earth model
                    to derive adjoint sensitivities with respect to density and
                    viscosity. Then, we can invert for mantle properties, thus
                    creating a model to provide insights about mantle dynamics
                    and surface deformation processes. Below is a graph which
                    plots misfit functions to invert for viscosity and
                    temperature.
                    <img
                    src={Pro1I3}
                    alt="Second photo of Project 1"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  />
                  </p> */}
                </div>
              </div>
            </li>
            <li>
              <div className="bg-gray-100 p-4 shadow rounded-lg hover:bg-gray-200 transition">
                <h4 className="text-xl font-semibold">
                  2. Advanced Borehole data Processing to assess Water 
                  Saturation in Oil and Gas reservoirs  <br/> Apr 2024 – Aug 2024
                </h4>
                <p className="text-gray-700 mt-2">
                Prof. Ravi Sharma (Indian Institute of 
                  Technology Roorkee, India) 
                </p>
                <div>
            
                  <p className="text-justify text-gray-600 text-lg mt-2">
                  The objective of the project on automated petrophysics is to enhance 
                  the evaluation of subsurface geological formations to determine their 
                  potential for hydrocarbon production. The methodology for the automated 
                  petrophysics project involves a systematic approach to formation evaluation, 
                  beginning with the identification of clean, porous zones through well logging. 
                  The process includes analyzing key parameters such as porosity, resistivity, 
                  and permeability to assess the presence and quantity of hydrocarbons within 
                  the formation. A flowchart outlines the steps: first, clean zones are identified,
                   followed by porosity checks and resistivity measurements to pinpoint the zones 
                   of interest. Detailed analysis is done after that. In this case, we are 
                   interested in the water-saturated zone so we calculate the saturation using 
                   different models such as Archies’ Law, Simandoux Model, and Dual Water Model. 
                   Manual calculation is very time-consuming in the case of big data so if we 
                   write a code for automation, it would be very useful in real-time analysis 
                   and also economically beneficial.
                  </p>
                  <img
                    src={Pro2I1}
                    alt="First photo of Project 2"
                    className="w-full h-auto sm:w-2/3 rounded mt-4 shadow-lg"
                  />

                  <p className="text-justify text-gray-600 text-lg mt-2">
                  In this figure, the three plots – Vshale, diff 
                  (difference between porosity measured using neutron 
                  and density log), and resistivity log are shown. By 
                  taking into account the appropriate values of these 
                  three logs, the zone of interest is calculated. In 
                  this sample data at a depth of 8300 feet, the water-
                  saturated zone is present.
                  </p>
                  <img
                    src={Pro2I2}
                    alt="Second photo of Project 2"
                    className="w-full h-auto sm:w-2/3 rounded mt-4 shadow-lg"
                  />
                  <p className="text-justify text-gray-600 text-lg mt-2">
                  Here the four plots of saturation are represented using 
                  Archies law, salinity equation, Simandous model, and dual 
                  water model respectively.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="bg-gray-100 p-4 shadow rounded-lg hover:bg-gray-200 transition">
                <h4 className="text-xl font-semibold">
                  3. Mapping Spatiotemporal Variation of Wheat Phenology 
                  in India Using Landsat-8 TimeSeries Data <br/> May 2024 – Aug 2024
                </h4>
                <p className="text-gray-700 mt-2">
                Prof. Kritika kothari (Indian Institute of 
                  Technology Roorkee, India) 
                </p>
                <div>
                <p className="text-justify text-gray-600 text-lg mt-2">
                  The research focuses on the phenology of wheat in Haridwar, 
                  Uttarakhand, India, utilizing Sentinel-2 NDVI (Normalized 
                  Difference Vegetation Index) time-series data to monitor 
                  and estimate the developmental stages of wheat crops. The 
                  study employs remote sensing techniques to analyze the 
                  spatiotemporal variation of wheat growth, highlighting 
                  the correlation between NDVI values and vegetation health.
                  Key findings include the estimated planting, jointing, 
                  heading, and maturity dates for wheat crops, with observed 
                  delays in certain growth stages. The study emphasizes the 
                  use of Google Earth Engine for data collection and random 
                  forest classification for analyzing NDVI data, which helps 
                  in understanding the spatiotemporal patterns of wheat development.
                  The flowchart of methodology is shown below.

                  </p>
                  <img
                    src={Pro3I1}
                    alt="First photo of Project 3"
                    className="w-full h-auto sm:w-2/3 rounded mt-4 shadow-lg"
                  />
                  <p className="text- justify text-gray-600 text-lg mt-2">
                  For inferring the different stages, the NDVI time-series, 
                  and its first, and second derivatives are used in this 
                  remote sensing based algorithm, which are shown here.
                  </p>
                  <img
                    src={Pro3I2}
                    alt="Second photo of Project 3"
                    className="w-full h-auto sm:w-2/3 rounded mt-4 shadow-lg"
                  />

                  <p className="text- justify text-gray-600 text-lg mt-2">
                  These are the final results of the study. Here spatial variation is 
                  shown for each stage which carries a window of some days due to 
                  environmental variations with latitude and longitude.
                  </p>
                   <img
                    src={Pro3I3}
                    alt="Third photo of Project 3"
                    className="w-full h-auto sm:w-3/3 rounded mt-4 shadow-lg"
                  />
                  
                 

                  {/* <img
                    src={Pro3I4}
                    alt="Fourth photo of Project 3"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  /> */}
                  {/* <p className="text- justify text-gray-600 text-lg mt-2">
                    Here are some results on images we tried the model.
                  </p> */}
                </div>
              </div>
            </li>
            <li>

              
            <div className="bg-gray-100 p-4 shadow rounded-lg hover:bg-gray-200 transition">
                <h4 className="text-xl font-semibold">
                  4. Avacado Price Optimisation using OR-Tools
                  <br/> Feb 2024 – Apr 2024
                </h4>
                <p className="text-gray-700 mt-2">
                  Prof. Manu Kumar Gupta (IIT Roorkee)
                </p>
                <div>
                 
                  <p className="text-justify text-gray-600 text-lg mt-2">
                  The avocado pricing problem involves determining the optimal 
                  price for avocados to maximize revenue based on the relationship 
                  between price and demand. This relationship can be effectively 
                  modeled using different machine learning techniques such as linear 
                  regression, ridge regression, SVR, gradient boost etc, where 
                  historical data on avocado sales is analyzed to establish a predictive 
                  model. By formulating this as a quadratic programming problem, 
                  we can use optimization techniques to identify the price that 
                  yields the highest revenue.
                  Expanding upon the first model, the second aspect of the 
                  avocado pricing problem makes better use of the BARON solver 
                  to handle the complex nature of the price-demand relationship. 
                  Because BARON can handle mixed-integer nonlinear programming 
                  (MINLP), as opposed to typical linear models, it can be used 
                  to integrate more advanced demand forecasting methods utilising 
                  machine learning tools like Scikit-Learn. This method offers a thorough
                   solution to the avocado pricing problem by providing that the 
                   generated price not only maximises revenue but also takes the 
                   nonlinear dynamics of market demand into consideration.


                  </p>
                  {/* <img
                    src={Pro4I1}
                    alt="First photo of Project 2"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  /> */}


          
                  {/* <p className="text- justify text-gray-600 text-lg mt-2">
                    To analyse the gravity survey data, we applied a few gravity
                    corrections such as drift correction, free-air correction
                    and bouger correction. Some of the results we got based on
                    plotting the data are shown below.
                  </p> */}

                  {/* <img
                    src={Pro4I2}
                    alt="Second photo of Project 2"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  />
                  <img
                    src={Pro4I3}
                    alt="Third photo of Project 4"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  />
                  <img
                    src={Pro4I4}
                    alt="Fourth photo of Project 4"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  />
                  <img
                    src={Pro4I5}
                    alt="Fifth photo of Project 4"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  /> */}
                </div>
              </div>
            </li>

            <li>

              <div className="bg-gray-100 p-4 shadow rounded-lg hover:bg-gray-200 transition">
                <h4 className="text-xl font-semibold">
                  5. Gravity-Magnetic Survey and Modeling of Mohand Anticline
                  <br/> Feb 2023 – May 2023
                </h4>
                <p className="text-gray-700 mt-2">
                  Dr. Ashutosh Chamoli (IIT Roorkee)
                </p>
                <div>
                 
                  <p className=" text-justify text-gray-600 text-lg mt-2">
                  The Himalayan foothills and the Indian subcontinent are divided 
                  by the Himalayan Fault, a significant tectonic surround in the 
                  Himalayan Mountain range. The Mohand anti-cline, which essentially
                   defines the HFT, was to be modelled for this project. For this 
                   project, we used the proton precision magnetometer (PPM) to get 
                   magnetic data and the CG-6 gravimeter to gather gravity data for 
                   the Mohand region, which is located in the Himalayan Frontal 
                   Thrust's Anticlinal Ridge (HFT). The stations and regio can be 
                   viewed in the attached illustration.
                  </p>
                  <img
                    src={Pro4I1}
                    alt="First photo of Project 2"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  />


          
                  <p className="text-justify text-gray-600 text-lg mt-2">
                  We used a few gravity corrections, including drift, 
                  free-air, and bouger corrections, to assess the gravity 
                  survey data. Some of the results we got based on graphing 
                  the data are displayed below.

                  </p>

                  <img
                    src={Pro4I2}
                    alt="Second photo of Project 2"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  />
                  <img
                    src={Pro4I3}
                    alt="Third photo of Project 4"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  />
                  <img
                    src={Pro4I4}
                    alt="Fourth photo of Project 4"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  />
                  <img
                    src={Pro4I5}
                    alt="Fifth photo of Project 4"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  />
                </div>
              </div>
            </li>

            <li>
              <div className="bg-gray-100 p-4 shadow rounded-lg hover:bg-gray-200 transition">
                <h4 className="text-xl font-semibold">
                  6. RMT and TEM Modelling of HFT Zone Mar 2023 – Apr 2023
                </h4>
                <p className="text-gray-700 mt-2">
                  Prof. Bülent Tezkan  (University of Cologne, Germany) & Prof. Mohd.
                  Israil (IIT Roorkee)
                </p>
                <div>
                  <img
                    src={Pro5I1}
                    alt="First photo of Project 5"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  />
                  <img
                    src={Pro5I2}
                    alt="Second photo of Project 5"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  />
                  <p className="text-justify text-gray-600 text-lg mt-2">
                  In this project and field training, we applied Radio Magnetotellurics 
                  (RMT) and Transient Electromagnetic (TEM) approaches were to explore 
                  the Himalayan Frontal Thrust (HFT) zone. In RMT, a frequency-dependent 
                  electromagnetic approach, we looked at the Earth's subsurface conductivity 
                  using natural electromagnetic fields. We measured the reduction of induced 
                  electromagnetic fields in TEM. A comprehensive three-dimensional structural 
                  model of the HFT zone was produced by using these techniques to process and 
                  model geophysical data. As a result, we may use it to learn about both shallow 
                  and deep structures, as well as the subsurface compositions and fault structures 
                  below. The project's study area is displayed below. I am unable to release 
                  the findings because the data was confidential.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="mb-8" id="achievements">
        <h3 className="text-2xl font-semibold mb-4">Achievements</h3>
        <ol>
          <li>
            1. {" "}   
            <a
              href={Shivika_12th_state_gov_award}
              
              className="text-blue-500 hover:underline"
            >
             State Government Award
            </a> – Awarded by UP State Government for getting 2nd 
            position in district in 12th board exams.
            
          </li>
          <li>2. Cleared IIT-JEE </li>
        </ol>
      </div>

      {/* COURSES SECTION */}
      <section id="courses" ref={sectionRefs.courses} className="mb-12">
        <h2 className="font-bold text-3xl text-gray-900 mb-6">Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800">
          <ul className="list-disc space-y-2 px-4">
            <li className="hover:text-red-500 transition-colors duration-300">
              Computer Programming (C/C++)
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Probability and Statistics
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Digital Image Processing
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Geophysical Well-logging
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Petrophysics
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Numerical Modelling
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Geophysical Inversion
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Geophysical Signal Processing
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Petroleum Geosciences
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Multi-variable Calculus
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Seismology & Strong Motion Seismology
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Multi-dimensional Mechanics
            </li>
          </ul>
          <ul className="list-disc space-y-2 px-4">
            
            <li className="hover:text-red-500 transition-colors duration-300">
              Seismic Prospecting
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Geoinformatics
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Electrical & EM Prospecting
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Field Work
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Plate Tectonics
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Geology of India
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Physical and Structural Geology
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Communication Skills
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Financial Accounting
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Marketing Management
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Production & Operation Management
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Managerial Economics
            </li>
            
          </ul>
        </div>
      </section>

      {/* TEACHING AND MENTORSHIP EXPERIENCE
      <section
        id="teachingMentorshipExperience"
        ref={sectionRefs.teachingMentorshipExperience}
        className="mb-12"
      >
        <h2 className="font-bold text-2xl text-gray-900 mb-4">
          Teaching & Mentorship Experience
        </h2>
        <div className="space-y-6 text-gray-800">
          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="font-semibold text-xl">
              1. Student Mentor, Student Mentorship Program, IIT Roorkee
              <span className="text-sm text-gray-600 block">
                Sep 2023 – Apr 2024
              </span>
            </h3>
            <p className="text-gray-700">
              Mentoring and guiding freshman year students. {" "}
              <a href={smp}  className="text-blue-500 hover:underline">
                {" "}
                Certificate
              </a>
            </p>
          </div>
          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="font-semibold text-xl">
              2. Education Mentor, Raman Classes, Roorkee
              <span className="text-sm text-gray-600 block">
                Jan 2021 – Jul 2023
              </span>
            </h3>
            <p className="text-gray-700">
              Mentoring and teaching students for IIT JEE and Python
            </p>
          </div>
          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="font-semibold text-xl">
              3. Mentor in Workshops – IIT Roorkee, COER University, KRM
              University
              <span className="text-sm text-gray-600 block">
                Jul 2023 – Jun 2024
              </span>
            </h3>
          </div>
        </div>
      </section> */}

      {/*   extra curricular section */}
      <section
        id="extraCurricular"
        ref={sectionRefs.extraCurricular}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Extra-Curricular Activities
        </h3>
        <div className="space-y-6 text-gray-800">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-xl">
              1. Volunteer, National Service Scheme, IIT Roorkee:
              <span className="text-sm text-gray-600 block">
                Dec 2020 – Dec 2021
              </span>
            </h4>
            <p className="text-gray-700"> Empowering underprivileged 
              students in grades 6th to 10th by providing them with 
              free education by teaching Science and Mathematics.
              Conducting doubt-solving sessions, tests, and assignments 
              to assess their progress and further stimulate their 
              interest in academics</p>
          </div>
          {/* <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-xl">
              2. Member, National Sports Organization (NSO), IIT Roorkee
              <span className="text-sm text-gray-600 block">
                Dec 2020 – Dec 2021
              </span>
            </h4>
            <p className="text-gray-700">
              Worked to increase youth interest in sports and physical fitness
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-xl">
              3. Participant, Institute Open Championship, IIT Roorkee
              <span className="text-sm text-gray-600 block">2023, 2024</span>
            </h4>
            <p className="text-gray-700">
              Participant in Badminton Championship - Singles
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-xl">
              4. Participant, Inter-IIT Trials, IIT Roorkee
              <span className="text-sm text-gray-600 block">2022</span>
            </h4>
            <p className="text-gray-700">Participant in Squash</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-xl">
              5. Participant, Hamrock Cricket Tournament, IIT Roorkee
              <span className="text-sm text-gray-600 block">2024</span>
            </h4>
            <p className="text-gray-700">
              Bowling allrounder – helped team secure a 2nd place finish
            </p>
          </div> */}
        </div>
      </section>

      {/* REFERENCES SECTION */}
      <section id="references" ref={sectionRefs.references} className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">References</h3>
        <div className="space-y-6">
          {/* <div className="bg-gray-100 p-6 shadow-md rounded-lg">
            <p className="text-xl font-bold text-gray-900 mb-2">
              1. Professor Rhodri Davies
            </p>
            <p className="text-gray-800 mb-1">
              Associate Director Research & Engagement, Research School of Earth
              Sciences, ANU, Australia
            </p>
            <p className="flex items-center mb-1">
              <MdEmail className="mr-2 text-blue-500" />
              <span className="text-gray-700">rhodri.davies@anu.edu.au</span>
            </p>
            <p className="flex items-center mb-1">
              <MdPhone className="mr-2 text-green-500" />
              <span className="text-gray-700">+61 2 61253643</span>
            </p>
            <p className="flex items-center mb-1">
              <MdLink className="mr-2 text-purple-500" />
              <a
                href="https://earthsciences.anu.edu.au/people/professor-rhodri-davies"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Profile Link
              </a>
            </p>
            <p className="flex items-center mb-1">
              <FaLinkedin className="mr-2 text-blue-600" />
              <a
                href="https://www.linkedin.com/in/rhodri-davies-086237aa"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </p>
          </div> */}

          {/* Reference 1 */}
          <div className="bg-gray-100 p-6 shadow-md rounded-lg">
            <p className="text-xl font-bold text-gray-900 mb-2">
              1. Professor Sagarika Mukhopodhyay
            </p>
            <p className="text-gray-800 mb-1">
              Professor, Department of Earth Sciences, IIT Roorkee,
              India
            </p>
            <p className="flex items-center mb-1">
              <MdEmail className="mr-2 text-blue-500" />
              <span className="text-gray-700">sagarika.mukhopadhyay@es.iitr.ac.in</span>
            </p>
            <p className="flex items-center mb-1">
              <MdPhone className="mr-2 text-green-500" />
              <span className="text-gray-700">+91 1332-285563</span>
            </p>
            <p className="flex items-center mb-1">
              <MdLink className="mr-2 text-purple-500" />
              <a
                href="https://iitr.ac.in/~ES/sagarfes"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Profile Link
              </a>
            </p>
            <p className="flex items-center mb-1">
              <FaLinkedin className="mr-2 text-blue-600" />
              <a
                href="https://www.linkedin.com/in/sagarika-mukhopadhyay-7029271a/?originalSubdomain=in"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </p>
          </div>
          
          {/* Reference 2 */}
          <div className="bg-gray-100 p-6 shadow-md rounded-lg">
            <p className="text-xl font-bold text-gray-900 mb-2">
              2. Dr. Simanchal Padhy
            </p>
            <p className="text-gray-800 mb-1">
              Associate Professor, Department of Earth Sciences, IIT Roorkee,
              India
            </p>
            <p className="flex items-center mb-1">
              <MdEmail className="mr-2 text-blue-500" />
              <span className="text-gray-700">spadhy@es.iitr.ac.in</span>
            </p>
            <p className="flex items-center mb-1">
              <MdPhone className="mr-2 text-green-500" />
              <span className="text-gray-700">+91 97013 48255</span>
            </p>
            <p className="flex items-center mb-1">
              <MdLink className="mr-2 text-purple-500" />
              <a
                href="https://www.iitr.ac.in/~ES/Simanchal_Padhy"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Profile Link
              </a>
            </p>
            <p className="flex items-center mb-1">
              <FaLinkedin className="mr-2 text-blue-600" />
              <a
                href="https://www.linkedin.com/in/simanchal-padhy-b46803231/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </p>
          </div>
          {/* Reference 3 */}
          {/* <div className="bg-gray-100 p-6 shadow-md rounded-lg"> */}
            {/* <p className="text-xl font-bold text-gray-900 mb-2">
              2. Dr. Kritika Kothari
            </p>
            <p className="text-gray-800 mb-1">
              Assistant Professor, Department of Water Resources 
              Development and Management, IIT Roorkee,
              India
            </p>
            <p className="flex items-center mb-1">
              <MdEmail className="mr-2 text-blue-500" />
              <span className="text-gray-700">kritika.kothari@wr.iitr.ac.in</span>
            </p>
            <p className="flex items-center mb-1">
              <MdPhone className="mr-2 text-green-500" />
              <span className="text-gray-700">+91 01332-285041</span>
            </p>
            <p className="flex items-center mb-1">
              <MdLink className="mr-2 text-purple-500" />
              <a
                href="https://iitr.ac.in/Departments/Water%20Resources%20Development%20and%20Management%20Department/People/Faculty/100994.html"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Profile Link
              </a>
            </p> */}
            {/* <p className="flex items-center mb-1">
              <FaLinkedin className="mr-2 text-blue-600" /> */}
              {/* <a
                href="https://www.linkedin.com/in/anand-joshi-405b11b3/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              > */}
                {/* LinkedIn Profile
              </a> */}
            {/* </p> */}
          {/* </div> */}
        </div>
      </section>
      <section id="curriculum"></section>

 
      
      
      {/* Contact Section */}
      <section id="contact" ref={sectionRefs.contact}>
        <h3 className="text-2xl font-semibold mb-4">CV & Contact</h3>
        <p>
          To download my CV, click {" "}
          <a href={cv} download
          className="text-blue-600 hover:underline">
            Shivika's CV. 
          </a>
        </p>
        <br/>

        <p>
          Email :{" "}
          <a href="mailto: prahlada_vm@es.iitr.ac.in">
            shivika@es.iitr.ac.in
          </a>
        </p>
        <p>
          Contact : <a href="tel:+91 7217456990"> +91 8979926686</a>
        </p>
        <p>
          Linkedin :{" "}
          <a href="https://www.linkedin.com/in/shivika-pundir/">
            www.linkedin.com/in/shivika-pundir
          </a>{" "}
        </p>
        <p>Address : Gandhinagar, Muzaffarnagar, Uttar Pradesh, India (251001)</p>
      </section>
    </div>
  );
};

export default MainPage;
