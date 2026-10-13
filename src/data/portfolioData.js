// Engineering Portfolio Dataset - 100% Accurate, Strictly Relative Project Images

export const PERSONAL_INFO = {
  name: "Muhammad Yasir Naeem",
  title: "Mechanical & Aerospace Simulation Engineer",
  subTitle: "Specializing in High-Fidelity CAD Modeling, CFD Aerodynamics & FEA Structural Mechanics",
  tagline: "Virtual prototyping and simulation engineering delivering reliable, high-performance mechanical designs.",
  bio: "Mechanical and Aerospace Engineer with deep practical experience in CAD solid modeling, computational fluid dynamics (CFD), and finite element analysis (FEA). I help engineering teams turn early concepts into optimized hardware by predicting real-world fluid flows, thermal profiles, and stress concentrations before fabrication.",
  location: "Islamabad, Pakistan · Available Worldwide",
  email: "yasirnaeem8382@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-yasir-naeem-95bb172b3",
  upwork: "https://www.upwork.com/freelancers/~010adbfe4ec5f494bd",
  facebook: "https://www.facebook.com/profile.php?id=61593601011654",
  experienceYears: "4+",
  simulationsRun: "180+",
  cadAssemblies: "90+",
  convergenceRate: "99.8%"
};

export const TECHNICAL_SKILLS = [
  { name: "SOLIDWORKS CAD / CSWP", category: "CAD", level: 96, icon: "Cpu" },
  { name: "ANSYS CFX & Fluent", category: "CFD", level: 94, icon: "Wind" },
  { name: "FEA Structural & Thermal (Abaqus)", category: "FEA", level: 90, icon: "Activity" },
  { name: "COMSOL Multiphysics", category: "Multiphysics", level: 85, icon: "Layers" },
  { name: "MATLAB & Simulink", category: "Computation", level: 88, icon: "Code2" },
  { name: "Python for CAE Automation", category: "Computation", level: 86, icon: "Terminal" },
  { name: "Thermal & Conjugate Heat Transfer", category: "Thermal", level: 92, icon: "Flame" },
  { name: "Polyhedral & Boundary Layer Meshing", category: "CFD", level: 95, icon: "Box" },
];

export const LAB_PHOTOS = [
  { src: "/assets/pic 1.png", alt: "Lab testing and aerodynamic prototype inspection", caption: "Experimental Rig Calibration & Aerodynamic Testing" },
  { src: "/assets/pic 2.png", alt: "Fluid mechanics flow visualization bench", caption: "Fluid Mechanics Testbench & Sensor Acquisition" },
  { src: "/assets/pic 3.png", alt: "Precision assembly and prototype inspection", caption: "Precision Assembly & Inspection" },
  { src: "/assets/pic 4.png", alt: "Hardware in the loop simulation and telemetry test", caption: "Hardware Telemetry & Structural DAQ" },
];

// ============================================================================
// STRICTLY RELATIVE PROJECT GALLERIES (NO RANDOM IMAGES)
// ============================================================================

export const CAD_PROJECTS = [
  {
    id: "cad-hydroplane-complete",
    category: "cad",
    title: "Aerodynamic Hydroplane & Racing Hull Assembly",
    subtitle: "21-Part Aerodynamic Surface Assembly, Sponsons & Ram Wings",
    cover: "/assets/cad/Cover.jpg",
    // ONLY Hydroplane Assembly Drawings & Renderings:
    gallery: [
      "/assets/cad/Cover.jpg",
      "/assets/cad/ALL_PARTS.png",
      "/assets/cad/pennzoil.70.jpg",
      "/assets/cad/ortho_front.png",
      "/assets/cad/ortho_back.png",
      "/assets/cad/cad draw.png",
      "/assets/cad/drawing.png",
      "/assets/cad/1.jpeg",
      "/assets/cad/2.jpeg",
      "/assets/cad/3.jpeg"
    ],
    // The exact 21 hydroplane components:
    components: [
      { name: "Nose Fairing", img: "/assets/cad/1_-_Nose.png" },
      { name: "Rear Deck Cowling", img: "/assets/cad/2_-_Rear_Deck__Cowling.png" },
      { name: "Sub Cowling", img: "/assets/cad/3_-_Sub_Cowling.png" },
      { name: "High-Temp Exhaust", img: "/assets/cad/4_-_Exhaust.png" },
      { name: "Right Front Sponson", img: "/assets/cad/5_-_Right_Front_Sponson.png" },
      { name: "Right Rear Sponson", img: "/assets/cad/6_-_Right_Rear_Sponson.png" },
      { name: "Left Front Sponson", img: "/assets/cad/7_-_Left_Front_Sponson.png" },
      { name: "Left Rear Sponson", img: "/assets/cad/8_-_Left_Rear_Sponson.png" },
      { name: "Rear Vertical Wing", img: "/assets/cad/9_-_Rear_Vertical_Wing_Half.png" },
      { name: "Horizontal Stabilizer", img: "/assets/cad/11_-_Rear_Horizontal_Wing.png" },
      { name: "Canard Wing", img: "/assets/cad/12-_Canard.png" },
      { name: "Ram Airfoil Wing", img: "/assets/cad/13_-_Ram_Wing.png" },
      { name: "Turbine Exhaust Mount", img: "/assets/cad/14_-_Turbine__Exhaust_mount.png" },
      { name: "Turbine Core", img: "/assets/cad/15_-_Turbine.png" },
      { name: "Prop Shaft Support", img: "/assets/cad/16_-_Prop_Shaft_Support.png" },
      { name: "Cavitation Propeller", img: "/assets/cad/17_-_Prop.png" },
      { name: "Rudder Mount Bracket", img: "/assets/cad/18_-_Rudder_Mount.png" },
      { name: "Steering Rudder", img: "/assets/cad/19_-__Rudder.png" },
      { name: "Right Aerodynamic Mirror", img: "/assets/cad/20_-_Right_Side_View_Mirror.png" },
      { name: "Left Aerodynamic Mirror", img: "/assets/cad/21_-_Left_Side_View_Mirror.png" },
    ],
    software: ["SOLIDWORKS", "KeyShot", "Class-A Surfacing", "ASME Y14.5"],
    description: "Multi-element high-speed aerodynamic boat modeled with complex class-A curvature surfaces, aerodynamic ram wings, turbine exhaust conduits, and precise draft angle tooling specifications.",
    specs: [
      { label: "Part Count", val: "21 Dedicated Components" },
      { label: "Tolerance Class", val: "ISO 2768-m" },
      { label: "Surface Continuity", val: "G2 Curvature Continuous" },
      { label: "Manufacturing", val: "Carbon Fiber Vacuum Infusion" }
    ]
  },
  {
    id: "cad-quadcopter-uav",
    category: "cad",
    title: "Lightweight UAV Airframe & Rotor Assembly",
    subtitle: "High-Strength Carbon Composite Drone Frame Modeling",
    cover: "/assets/cad/drone.png",
    // ONLY UAV Drone Model:
    gallery: [
      "/assets/cad/drone.png"
    ],
    software: ["SOLIDWORKS", "Weight Optimization", "3D Printing DFM"],
    description: "Aero-optimized uncrewed aerial frame designed with minimal dry weight, dampening motor arms, and streamlined electronics bay.",
    specs: [
      { label: "Payload Capacity", val: "3.2 kg" },
      { label: "Weight Reduction", val: "28% vs standard CNC" },
      { label: "Material", val: "Toray T700 Carbon & PETG" }
    ]
  },
  {
    id: "cad-rotational-wheel-hub",
    category: "cad",
    title: "High-Performance Wheel Hub & Rim Geometry",
    subtitle: "Topology-Optimized Lightweight Automotive Wheel & GD&T Blueprint",
    cover: "/assets/cad/wheel.png",
    // ONLY Wheel 3D Solid & Wheel 2D Blueprint:
    gallery: [
      "/assets/cad/wheel.png",
      "/assets/cad/drw 2.png"
    ],
    software: ["SOLIDWORKS", "Topology Study", "GD&T Blueprint"],
    description: "Monoblock aerodynamic lightweight wheel rim with optimized stress dissipation spokes, structural hub offsets, and brake ventilation ducting.",
    specs: [
      { label: "Alloy Grade", val: "Forged 6061-T6 Aluminum" },
      { label: "Rotational Mass", val: "7.4 kg" },
      { label: "Load Rating", val: "850 kg / wheel" }
    ]
  }
];

export const CFD_PROJECTS = [
  {
    id: "cfd-microchannel-heat-exchanger",
    category: "cfd",
    title: "Microchannel Heat Exchanger Unit Cell CFD",
    subtitle: "13mm Periodic Unit Cell Conjugate Heat Transfer (CHT) Contours",
    cover: "/assets/cfd/01_CFD_Unit_Cell_Length_13mm.png",
    // ONLY 13mm Unit Cell Contours, Pressure Plots, Wall Shear & Heat Flux:
    gallery: [
      "/assets/cfd/01_CFD_Unit_Cell_Length_13mm.png",
      "/assets/cfd/13_CFD_Total_Pressure_Contour_Result.png",
      "/assets/cfd/pressure plot.PNG",
      "/assets/cfd/total pressure.PNG",
      "/assets/cfd/mass flux.PNG",
      "/assets/cfd/kinetic energy.PNG",
      "/assets/cfd/wall shear x.PNG",
      "/assets/cfd/wall shear y.PNG",
      "/assets/cfd/wall  shea z.PNG",
      "/assets/cfd/wall shear(total).PNG",
      "/assets/cfd/x velocity.PNG",
      "/assets/cfd/x velocityn.PNG",
      "/assets/cfd/y.PNG",
      "/assets/cfd/z veocity.PNG",
      "/assets/cfd/hg.PNG",
      "/assets/cfd/543.PNG",
      "/assets/cfd/654.PNG"
    ],
    software: ["ANSYS Fluent", "CFX Solver", "Polyhedral Meshing", "k-ω SST"],
    description: "Numerical investigation of convective thermal dissipation across intricate 13mm repeating unit cells. Detailed quantification of pressure drops, turbulent kinetic energy, Nusselt numbers, and wall shear vectors.",
    specs: [
      { label: "Mesh Elements", val: "4.8 Million Polyhedral" },
      { label: "Turbulence Model", val: "k-ω SST Low-Re Wall" },
      { label: "Heat Flux", val: "450 kW/m² Dissipation" },
      { label: "Pressure Loss ΔP", val: "1.42 kPa @ 2.5 m/s" }
    ]
  },
  {
    id: "cfd-aerospace-jet-external",
    category: "cfd",
    title: "Transonic Jet & External Aerodynamic Flowfield",
    subtitle: "Compressible Aerodynamics, Wing Airfoils & Streamlines",
    cover: "/assets/cfd/jet.png",
    // ONLY Jet, Airfoil Wings & Aerodynamic Streamlines:
    gallery: [
      "/assets/cfd/jet.png",
      "/assets/cfd/streamlines.png",
      "/assets/cfd/fluid flow.png",
      "/assets/cfd/four wings.png",
      "/assets/cfd/formula.png"
    ],
    software: ["ANSYS CFX", "Compressible Navier-Stokes", "Pressure-Based Coupled"],
    description: "High-fidelity compressible aerodynamic simulation analyzing boundary layer separation, wake vortices, and sonic shock expansion over aircraft airfoils and multi-element wings.",
    specs: [
      { label: "Mach Regime", val: "0.85 Transonic" },
      { label: "y+ Wall Spacing", val: "y+ < 1.0 (Viscous Sublayer)" },
      { label: "Lift-to-Drag L/D", val: "18.4 at Cruise Alpha" }
    ]
  },
  {
    id: "cfd-uav-propeller-aerodynamics",
    category: "cfd",
    title: "Multi-Rotor UAV Downwash & Wake Interaction",
    subtitle: "Sliding Mesh Propeller Tip Vortices & Downwash Flow",
    cover: "/assets/cfd/drone 1.png",
    // ONLY Drone CFD Downwash & Wake Visualizations:
    gallery: [
      "/assets/cfd/drone 1.png",
      "/assets/cfd/drone 2.png",
      "/assets/cfd/drone 3.png",
      "/assets/cfd/shadow.png"
    ],
    software: ["ANSYS Fluent", "Sliding Mesh (SMM)", "Transient Aeroacoustics"],
    description: "Aerodynamic downwash and propeller blade tip vortex studies for multi-rotor aircraft in hover and transition flight envelopes.",
    specs: [
      { label: "Rotor RPM", val: "5,400 RPM" },
      { label: "Figure of Merit", val: "0.78 Prop Efficiency" },
      { label: "Thrust Output", val: "38.2 N per Arm" }
    ]
  },
  {
    id: "cfd-blade-jet-flow-jseries",
    category: "cfd",
    title: "Turbomachinery Cascade Stator Passage Simulation",
    subtitle: "J-Series Cascade Stator Blade Velocity Gradients",
    cover: "/assets/cfd/J3.png",
    // ONLY J-Series Cascade Turbine Passage Images:
    gallery: [
      "/assets/cfd/J3.png",
      "/assets/cfd/J4.png",
      "/assets/cfd/J5.png",
      "/assets/cfd/J6.png",
      "/assets/cfd/J7.png",
      "/assets/cfd/J8.png",
      "/assets/cfd/J9.png",
      "/assets/cfd/J10.png",
      "/assets/cfd/J11.png",
      "/assets/cfd/J12.png"
    ],
    software: ["ANSYS CFX", "Turbomachinery Solver", "Periodic Interface"],
    description: "Passage-by-passage simulation through aerodynamic cascade blades to minimize secondary flow vortex losses and enhance stage isentropic efficiency.",
    specs: [
      { label: "Stage Efficiency", val: "91.4%" },
      { label: "Stagnation Pressure Loss", val: "Reduced by 14%" }
    ]
  }
];

export const FEA_PROJECTS = [
  {
    id: "fea-engine-block-thermomechanical",
    category: "fea",
    title: "Engine Block Thermo-Mechanical FEA",
    subtitle: "Coupled Non-Linear Thermal Expansion & Cylinder Firing Pressure",
    cover: "/assets/fea/engine.png",
    // ONLY Engine Block FEA Results:
    gallery: [
      "/assets/fea/engine.png",
      "/assets/fea/file-1456687113521.jpg"
    ],
    software: ["Abaqus / ANSYS Mechanical", "Thermal-Structural Coupling", "Von Mises Stress"],
    description: "Non-linear structural stress and temperature distribution simulation under peak cylinder firing pressure (14 MPa) and transient coolant conditions.",
    specs: [
      { label: "Peak Von Mises", val: "215 MPa (< Yield Limit 310 MPa)" },
      { label: "Safety Factor (FoS)", val: "1.44 under peak cyclic load" },
      { label: "Material", val: "A356-T6 Cast Aluminum Alloy" },
      { label: "Fatigue Life", val: "> 10^7 Cycles (High Cycle Fatigue)" }
    ]
  },
  {
    id: "fea-aerospace-wing-spar",
    category: "fea",
    title: "Aerospace Airframe & Wing Spar Stress",
    subtitle: "Gust Loading, Flexural Bending & Aeroelastic Deflection",
    cover: "/assets/fea/plane fea.png",
    // ONLY Airplane & Wing Spar FEA Results:
    gallery: [
      "/assets/fea/plane fea.png",
      "/assets/fea/11.png",
      "/assets/fea/12.png",
      "/assets/fea/13.png"
    ],
    software: ["Abaqus FEA", "Composite Ply Layup", "Buckling Eigenvalue Analysis"],
    description: "Finite element model of aircraft wing spar and rib assembly subjected to 3.8g aerodynamic pull-up maneuvers, analyzing elastic deflection and shear web buckling.",
    specs: [
      { label: "Limit Load Factor", val: "+3.8g / -1.5g" },
      { label: "Tip Deflection", val: "38.2 mm Max" },
      { label: "First Buckling Mode", val: "λ = 2.12 (No Buckling Risk)" }
    ]
  },
  {
    id: "fea-contact-mechanics-wheels",
    category: "fea",
    title: "Contact Mechanics & Dynamic Wheel Impact",
    subtitle: "Elastoplastic Curb Strike & Multi-Body Contact FEA",
    cover: "/assets/fea/two wheel.png",
    // ONLY Wheel FEA & Contact Mesh Results:
    gallery: [
      "/assets/fea/two wheel.png",
      "/assets/fea/zigzag.png",
      "/assets/fea/2.png",
      "/assets/fea/3 pic.png"
    ],
    software: ["ANSYS Mechanical", "Explicit Dynamics", "Frictional Contact"],
    description: "Dynamic drop test and radial tire-rim contact mechanics simulation to prevent plastic yielding and crack initiation during harsh shock impacts.",
    specs: [
      { label: "Impact Velocity", val: "15 km/h 30° Obstacle Strike" },
      { label: "Plastic Strain", val: "ε_p < 0.012 localized" },
      { label: "Contact Type", val: "Augmented Lagrange (μ = 0.65)" }
    ]
  }
];

export const ALL_PROJECTS = [...CAD_PROJECTS, ...CFD_PROJECTS, ...FEA_PROJECTS];

export const ENGINEERING_SERVICES = [
  {
    title: "Parametric CAD & GD&T Drafting",
    description: "Production-ready 3D solid and surface models in SOLIDWORKS, complete with ASME Y14.5 compliant 2D manufacturing blueprints and tolerance stack-up analysis.",
    icon: "DraftingCompass",
    deliverables: ["STEP, IGES & Native SolidWorks CAD", "Manufacturing GD&T Blueprints", "DFM & Assembly BOMs"]
  },
  {
    title: "CFD Aerodynamics & Thermal Fluids",
    description: "Computational fluid dynamics for internal and external flows, conjugate heat transfer (CHT), aerodynamic drag reduction, and polyhedral boundary-layer meshing.",
    icon: "Wind",
    deliverables: ["Detailed Flow & Pressure Contour Reports", "Aerodynamic Lift & Drag Curves", "Conjugate Thermal Dissipation Analysis"]
  },
  {
    title: "FEA Structural & Fatigue Stress Analysis",
    description: "Linear static, non-linear contact, modal vibration, and fatigue life evaluations to guarantee structural integrity and optimize component weight.",
    icon: "ShieldAlert",
    deliverables: ["Von Mises Stress & Deflection Plots", "Factor of Safety (FoS) Mapping", "Topology & Weight Reduction Recommendations"]
  },
  {
    title: "CAE Simulation Automation",
    description: "Custom Python and MATLAB scripts to streamline repetitive mesh generation, parameter sweeps, and post-processing reporting.",
    icon: "Cpu",
    deliverables: ["Parametric Design Loops", "Automated Post-Processing Scripts", "Data Analysis & Verification Deliverables"]
  }
];
