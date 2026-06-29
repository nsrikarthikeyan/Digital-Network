export type ProductItem = {
  title: string;
  category: string;
  description: string;
  fullDetails: string;
  features: string[];
  specifications: string[];
  applications: string[];
  supportIncluded: string[];
  brands: string[];
};

export type ServiceItem = {
  slug: string;
  title: string;
  short: string;
  description: string;
  overview: string;
  highlights: string[];
  benefits: string[];
  idealFor: string[];
  process: string[];
  deliverables: string[];
  tools: string[];
  cta: string;
};

export const services: ServiceItem[] = [
  {
    slug: "it-support-repairs",
    title: "IT Support & Repairs",
    short: "Fast troubleshooting for desktops, laptops, printers and office devices.",
    description:
      "Digital Network provides dependable on-site and remote support for businesses across Karur, from first-time hardware issues to recurring maintenance tickets.",
    overview:
      "Our support team handles everything from quick virus removals and slow computer diagnostics to complex hardware board replacements and printer servicing. We focus on restoring productivity with the least possible downtime.",
    highlights: ["Same-day diagnostics", "Warranty-backed replacements", "Networked office support"],
    benefits: ["Rapid issue resolution", "Minimal downtime", "Professional service plans"],
    idealFor: ["Small offices", "Retail shops", "Schools", "Textile units"],
    process: ["Inspection and issue assessment", "Part replacement or repair planning", "Testing, delivery and follow-up support"],
    deliverables: ["Fault report", "Replacement recommendation", "System cleanup", "Post-service testing"],
    tools: ["Hardware diagnostics", "OS repair", "Data backup support", "Printer testing"],
    cta: "Book support visit",
  },
  {
    slug: "networking-security",
    title: "Networking & Security",
    short: "Secure and scalable routers, switches, firewalls and Wi-Fi coverage.",
    description:
      "We design robust local networks for schools, factories, shops and offices with secure routing, traffic segmentation and remote access support.",
    overview:
      "We deploy wired and wireless infrastructure with strong security controls so your business can connect staff, devices and data confidently across multiple rooms or branches.",
    highlights: ["PoE switches", "Firewall installation", "Wi-Fi coverage audits"],
    benefits: ["Reliable connectivity", "Protected business data", "Scalable infrastructure"],
    idealFor: ["Factories", "Offices", "Hostels", "Campus networks"],
    process: ["Site survey and coverage mapping", "Network design and installation", "Monitoring, upgrades and secure configuration"],
    deliverables: ["Network layout plan", "Router and switch configuration", "Wi-Fi access point placement", "Security policy setup"],
    tools: ["Structured cabling", "VLAN planning", "Firewall rules", "VPN configuration"],
    cta: "Request network audit",
  },
  {
    slug: "printers-consumables",
    title: "Printers & Consumables",
    short: "Sales, installation and repairs for office printers and accessories.",
    description:
      "From bulk printing needs to high-quality toner and cartridge replacement, we keep business printing operations running smoothly.",
    overview:
      "We supply office printers, genuine cartridges, toner and spare parts along with diagnostic support so businesses can keep printing invoices, reports and daily documents without interruption.",
    highlights: ["Laser and inkjet options", "Original consumables", "Repair and spare parts"],
    benefits: ["Clear print quality", "Lower maintenance costs", "Fast replacement support"],
    idealFor: ["Accounting firms", "Export houses", "Government offices", "Training centers"],
    process: ["Requirement review and printer selection", "Installation and calibration", "Maintenance and consumable replacement planning"],
    deliverables: ["Printer recommendation", "Driver installation", "Network print setup", "Consumable replacement plan"],
    tools: ["Laser printer service", "Inkjet maintenance", "Toner supply", "Paper-feed repair"],
    cta: "Get printer support",
  },
  {
    slug: "cloud-email-support",
    title: "Cloud & Email Support",
    short: "Google Workspace setup, migration and business email management.",
    description:
      "We help teams transition to cloud-based collaboration with polished setup, user onboarding and recurring support for business email.",
    overview:
      "From domain setup and mailbox migration to day-to-day Google Workspace administration, we make cloud communications easier for growing teams and remote staff.",
    highlights: ["Google Workspace setup", "User migration support", "Mailbox management"],
    benefits: ["Improved collaboration", "Secure cloud access", "Less admin effort"],
    idealFor: ["Startups", "Consultancies", "Educational institutions", "Remote teams"],
    process: ["Domain and account planning", "User migration and mail routing", "Training, support and governance"],
    deliverables: ["Domain verification", "Mailbox creation", "MX and SPF records", "User access guidance"],
    tools: ["Google Workspace", "DNS records", "Email migration", "Admin console"],
    cta: "Plan your email setup",
  },
  {
    slug: "amc-maintenance",
    title: "AMC & Maintenance",
    short: "Annual maintenance contracts for offices, shops and IT rooms.",
    description:
      "Our AMC plans keep hardware healthy with planned inspections, preventive checks and priority support for urgent problems.",
    overview:
      "Annual maintenance contracts provide scheduled inspections, software cleanup, cooling checks and urgent support so your office systems remain stable throughout the year.",
    highlights: ["Preventive maintenance", "Priority support", "Service reports"],
    benefits: ["Extended hardware life", "Predictable costs", "Less unexpected downtime"],
    idealFor: ["Retail chains", "Coaching centers", "Warehouses", "Offices"],
    process: ["Asset review and maintenance plan", "Scheduled inspections and preventive care", "Priority service when problems arise"],
    deliverables: ["Asset list", "Maintenance calendar", "Visit reports", "Priority support tracking"],
    tools: ["System health checks", "Dust cleanup", "Software updates", "Backup checks"],
    cta: "Discuss AMC plan",
  },
];

export const products: ProductItem[] = [
  {
    title: "Premium Laptops",
    category: "Computers",
    description: "Enterprise laptops and creator machines for daily office and design workloads.",
    fullDetails:
      "We offer premium business laptops and creator machines with genuine warranty, correct charger compatibility, clean operating system setup and professional handover support.",
    features: ["Official warranty", "Pre-configured OS", "Authorized repairs"],
    specifications: ["Intel Core and AMD Ryzen options", "SSD storage and memory upgrades", "Windows setup and driver updates"],
    applications: ["Office work", "Design and media", "Sales and field teams"],
    supportIncluded: ["Driver setup", "On-site delivery support", "Warranty assistance"],
    brands: ["Apple", "HP", "Dell", "Asus", "Lenovo"],
  },
  {
    title: "Enterprise Desktops & Workstations",
    category: "Computers",
    description: "Desktop systems configured for textile offices, accounting hubs and admin teams.",
    fullDetails:
      "Our desktop and workstation builds are planned for long working hours, stable components, easy upgrades, clean cabling and reliable business software performance.",
    features: ["Intel Core or Ryzen", "High reliability", "Rapid replacement parts"],
    specifications: ["Tower and compact cabinet options", "Business monitors and UPS pairing", "Accounting and office software readiness"],
    applications: ["Accounting software", "Design studios", "Admin offices"],
    supportIncluded: ["OS installation", "Peripheral setup", "Repair support"],
    brands: ["HP", "Dell", "Lenovo", "Custom Builds"],
  },
  {
    title: "Business Servers & Storage",
    category: "Infrastructure",
    description: "Local server and storage setups for databases, shared networks and file systems.",
    fullDetails:
      "From compact storage units to entry business servers, we help companies secure files, plan backups, control access and improve internal data availability.",
    features: ["Xeon and EPYC options", "RAID configurations", "Rack accessories"],
    specifications: ["NAS and entry server options", "RAID planning and shared folders", "Local backup and access control setup"],
    applications: ["Shared file storage", "Database access", "Office servers"],
    supportIncluded: ["Site planning", "Installation support", "Maintenance guidance"],
    brands: ["Dell PowerEdge", "HPE ProLiant", "Lenovo", "Synology"],
  },
  {
    title: "Office Laser & Inkjet Printers",
    category: "Printing",
    description: "All-in-one printer setups for invoices, reports and daily business documents.",
    fullDetails:
      "We supply laser, inkjet and multifunction printers with driver installation, network printing setup and practical model selection based on monthly print volume.",
    features: ["Wireless connectivity", "Duplex printing", "Heavy duty cycle"],
    specifications: ["Print, scan and copy models", "USB, LAN and Wi-Fi options", "Monthly volume based selection"],
    applications: ["Invoice printing", "Office reports", "Front desk documentation"],
    supportIncluded: ["Driver installation", "Print sharing setup", "Basic user guidance"],
    brands: ["HP", "Canon", "Epson", "Brother"],
  },
  {
    title: "Genuine Ink & Toner Cartridges",
    category: "Printing",
    description: "Original consumables for sharp prints and longer printer life.",
    fullDetails:
      "We provide genuine ink, toner and cartridge replacements for office printers, including bulk supply planning for teams with regular printing needs.",
    features: ["Genuine toners", "Bulk delivery available", "Ink refill support"],
    specifications: ["Model-matched cartridges", "Black and color options", "Yield-based replacement guidance"],
    applications: ["Billing desks", "Accounts departments", "Document rooms"],
    supportIncluded: ["Cartridge matching", "Replacement support", "Print quality checks"],
    brands: ["HP", "Dell", "Epson", "Canon"],
  },
  {
    title: "Printer Spares & Services",
    category: "Printing",
    description: "Repair support for printer rollers, fusers, belts and regular paper-feed issues.",
    fullDetails:
      "Our printer service support covers common mechanical and print-quality issues with original spare recommendations and practical repair guidance.",
    features: ["Original spare parts", "Same-day servicing", "Cartridge replacement"],
    specifications: ["Fuser assembly support", "Paper pickup roller service", "Carriage belt and feed issue checks"],
    applications: ["Office printers", "Billing counters", "Training centers"],
    supportIncluded: ["Fault diagnosis", "Spare replacement", "Test prints"],
    brands: ["HP", "Canon", "Epson", "Brother"],
  },
  {
    title: "Managed Switches & Routers",
    category: "Networking",
    description: "Reliable switches and routers for smooth data flow across business divisions.",
    fullDetails:
      "We plan and configure managed switches, business routers and network layouts that support stable connectivity, VLAN separation and future expansion.",
    features: ["Gigabit and 10G speeds", "PoE support", "VLAN configuration"],
    specifications: ["Managed and unmanaged switch options", "Router sizing by user count", "Patch panel and rack planning"],
    applications: ["Office LAN", "Factory floors", "Campus networking"],
    supportIncluded: ["Network mapping", "Configuration", "Troubleshooting"],
    brands: ["Cisco", "Aruba", "D-Link", "TP-Link"],
  },
  {
    title: "Enterprise Firewalls",
    category: "Security",
    description: "Firewall solutions for business networks, VPN access and sensitive data protection.",
    fullDetails:
      "Our firewall deployments help protect accounting systems, design files and staff devices with secure routing, filtering, VPN access and practical policy setup.",
    features: ["Intrusion prevention", "VPN for remote staff", "Web filtering"],
    specifications: ["Firewall sizing by user count", "VPN and web-filter rules", "Secure remote access for staff"],
    applications: ["Banking workstations", "Healthcare records", "Corporate networks"],
    supportIncluded: ["Secure configuration", "Policy setup", "Support updates"],
    brands: ["Sophos", "Fortinet", "SonicWall"],
  },
  {
    title: "Structured Cabling & Wi-Fi Access Points",
    category: "Networking",
    description: "Coverage-focused Wi-Fi and cabling layouts for mills, colleges and offices.",
    fullDetails:
      "We provide structured cabling, access point placement, Wi-Fi coverage checks and neat rack-side organization for dependable daily connectivity.",
    features: ["Structured patch panels", "Mesh Wi-Fi routing", "Network audits"],
    specifications: ["CAT6 cabling support", "Access point placement", "Guest Wi-Fi and coverage planning"],
    applications: ["Mills", "Schools and colleges", "Multi-floor offices"],
    supportIncluded: ["Site survey", "Cable labeling", "Wi-Fi testing"],
    brands: ["Ubiquiti", "Aruba Instant On", "Ruijie", "TP-Link"],
  },
  {
    title: "Laptop Power Adapters & Batteries",
    category: "Accessories",
    description: "Genuine replacement adapters and batteries for daily laptop reliability.",
    fullDetails:
      "We help customers choose the correct wattage, connector type and battery model so laptops charge safely and run reliably during business use.",
    features: ["Voltage surge protection", "Brand warranties", "Correct pin types"],
    specifications: ["Original and compatible options", "Wattage and connector matching", "Battery health guidance"],
    applications: ["Office laptops", "Student systems", "Field work devices"],
    supportIncluded: ["Model checking", "Adapter testing", "Battery replacement guidance"],
    brands: ["Apple", "HP", "Dell", "Lenovo", "Asus"],
  },
  {
    title: "Enterprise UPS Systems",
    category: "Power Backup",
    description: "UPS systems that protect servers, desktops and network devices from power cuts.",
    fullDetails:
      "We supply and size UPS systems for desktops, servers and network racks so teams can avoid sudden shutdowns and protect important hardware.",
    features: ["Backup batteries", "Surge filtering", "Clean sine-wave output"],
    specifications: ["Load-based UPS sizing", "Battery backup planning", "Server and network rack support"],
    applications: ["Server rooms", "Desktop clusters", "Network racks"],
    supportIncluded: ["Load assessment", "Installation support", "Battery replacement guidance"],
    brands: ["APC", "Microtek", "Luminous"],
  },
  {
    title: "Accessories & Peripherals",
    category: "Accessories",
    description: "Keyboards, mice, speakers, cables and everyday workspace accessories.",
    fullDetails:
      "We supply practical computer accessories for offices and institutions, including wired and wireless peripherals, display cables and replacement parts.",
    features: ["Bulk supply rates", "Premium build quality", "Easy replacement"],
    specifications: ["Wired and wireless options", "HDMI, VGA and network cables", "Keyboard, mouse and speaker choices"],
    applications: ["Office desks", "Computer labs", "Retail counters"],
    supportIncluded: ["Compatibility checking", "Bulk delivery", "Replacement support"],
    brands: ["Logitech", "Dell", "HP", "Lenovo"],
  },
];
