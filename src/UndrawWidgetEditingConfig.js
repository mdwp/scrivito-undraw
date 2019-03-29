import * as Scrivito from "scrivito";
import imageWidgetIcon from "../../assets/images/image_widget.svg";

Scrivito.provideEditingConfig("UndrawWidget", {
  title: "Illustration from Undraw",
  thumbnail: imageWidgetIcon,

  attributes: {
    svg: {
      title: "Undraw Illustration",

      values: [
        { value: "address", title: "Address" },
        { value: "agreement", title: "Agreement" },
        { value: "blogpost", title: "Blogpost" },
        { value: "browser", title: "Browser" },
        { value: "business-plan", title: "Business Plan" },
        { value: "calendar", title: "Calendar" },
        { value: "charts", title: "Charts" },
        { value: "coding", title: "Coding" },
        { value: "dashboard", title: "Dashboard" },
        { value: "data", title: "Data" },
        { value: "devices", title: "Devices" },
        { value: "everywhere", title: "Everywhere" },
        { value: "fastloading", title: "Fastloading" },
        { value: "hiring", title: "Hiring" },
        { value: "insync", title: "In Sync" },
        { value: "map-dark", title: "Map Dark" },
        { value: "messages", title: "Messages" },
        { value: "onboarding", title: "Onboarding" },
        { value: "organize-resume", title: "Organice Resume" },
        { value: "photo", title: "Photo" },
        { value: "pie-chart", title: "Pie Chart" },
        { value: "portfolio", title: "Portfolio" },
        { value: "posts", title: "Posts" },
        { value: "programming", title: "Programming" },
        { value: "realtime-sync", title: "Realtime Sync" },
        { value: "report", title: "Report" },
        { value: "resume-folder", title: "Resume Folder" },
        { value: "safe", title: "Safe" },
        { value: "search", title: "Search" },
        { value: "secure-data", title: "Secure Data" },
        { value: "server", title: "Server" },
        { value: "setup", title: "Setup" },
        { value: "site-stats", title: "Site Stats" },
        { value: "static-assets", title: "Static Assets" },
        { value: "tabs", title: "Tabs" },
        { value: "web-devices", title: "Web Devices" },

      ],
    },
  },
    properties: [
      'svg',
    ]
});
