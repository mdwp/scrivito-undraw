import * as Scrivito from "scrivito";
import * as ScrivitoPicks from 'scrivito-picks';

Scrivito.provideEditingConfig("UndrawWidget", {
  title: "Illustration from Undraw",



  propertiesGroups: [
    {
      title: 'SVG',
      component: ScrivitoPicks.createComponent([

        {
          attribute: 'svg',
              values: [
                { value: "address", title: "Address", previewClassName: 'address clip-preview' },
                { value: "agreement", title: "Agreement", previewClassName: 'agreement clip-preview' },
                { value: "blog", title: "Blogpost", previewClassName: 'blog clip-preview' },
                { value: "browser", title: "Browser", previewClassName: 'browser clip-preview' },
                { value: "business-plan", title: "Business Plan", previewClassName: 'business-plan clip-preview' },
                { value: "calendar", title: "Calendar", previewClassName: 'calendar clip-preview' },
                { value: "charts", title: "Charts", previewClassName: 'charts clip-preview' },
                { value: "creative-team", title: "Creative Team", previewClassName: 'creative-team clip-preview' },
                { value: "dashboard", title: "Dashboard", previewClassName: 'dashboard clip-preview' },
                { value: "data", title: "Data", previewClassName: 'data clip-preview' },
                { value: "devices", title: "Devices", previewClassName: 'devices clip-preview' },
                { value: "fastloading", title: "Fastloading", previewClassName: 'fast-loading clip-preview' },
                { value: "hiring", title: "Hiring", previewClassName: 'hiring clip-preview' },
                { value: "insync", title: "In Sync", previewClassName: 'in-sync clip-preview' },
                { value: "map", title: "Map", previewClassName: 'map clip-preview' },
                { value: "messages", title: "Messages", previewClassName: 'messages clip-preview' },
                { value: "onboarding", title: "Onboarding", previewClassName: 'onboarding clip-preview' },
                { value: "organize-resume", title: "Organice Resume", previewClassName: 'organize-resume clip-preview' },
                { value: "photo", title: "Photo", previewClassName: 'photo clip-preview' },
                { value: "pie-chart", title: "Pie Chart", previewClassName: 'pie-chart clip-preview' },
                { value: "portfolio", title: "Portfolio", previewClassName: 'portfolio clip-preview' },
                { value: "posts", title: "Posts", previewClassName: 'posts clip-preview' },
                { value: "programming", title: "Programming", previewClassName: 'programming clip-preview' },
                { value: "realtime-sync", title: "Realtime Sync", previewClassName: 'realtime-sync clip-preview' },
                { value: "report", title: "Report", previewClassName: 'report clip-preview' },
                { value: "resume-folder", title: "Resume Folder", previewClassName: 'resume-folder clip-preview' },
                { value: "safe", title: "Safe", previewClassName: 'safe clip-preview' },
                { value: "search", title: "Search", previewClassName: 'search clip-preview' },
                { value: "secure-data", title: "Secure Data", previewClassName: 'secure-data clip-preview' },
                { value: "server", title: "Server", previewClassName: 'server clip-preview' },
                { value: "setup", title: "Setup", previewClassName: 'setup clip-preview' },
                { value: "site-stats", title: "Site Stats", previewClassName: 'site-stats clip-preview' },
                { value: "static-assets", title: "Static Assets", previewClassName: 'static-assets clip-preview' },
                { value: "tabs", title: "Tabs", previewClassName: 'tabs clip-preview' },

              ],
            }

          ]),
        },
      ],
});

