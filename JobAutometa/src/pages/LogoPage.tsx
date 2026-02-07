import { Download, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import html2canvas from "html2canvas";

export function LogoPage() {
  const handleDownload = async (elementId: string, filename: string) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        backgroundColor: null,
        scale: 2,
        logging: false,
        onclone: (clonedDoc) => {
          // Remove all style elements that contain oklch colors
          const styleElements = clonedDoc.querySelectorAll('style');
          styleElements.forEach((style) => {
            if (style.textContent?.includes('oklch')) {
              style.remove();
            }
          });
        },
      });

      const link = document.createElement("a");
      link.download = `${filename}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={handleGoBack}
            className="mb-8 text-sky-200 hover:text-white hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          <h1 className="text-5xl sm:text-6xl mb-4">Brand Assets</h1>
          <p className="text-xl text-sky-100">
            Download high-quality logo variations and virtual backgrounds for JobAutometa
          </p>
          <p className="text-sm text-sky-200 mt-4">
            Click the download button on any card to save as PNG (2x resolution)
          </p>
        </div>
      </div>

      {/* Logo Variations Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-center">Logo Variations</h2>
          <div className="grid grid-cols-1 gap-8">
            {/* Logo Card 1 - Primary Logo with Decorative Elements */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow max-w-5xl mx-auto w-full">
              <div className="bg-white p-48 min-h-[1200px] flex items-center justify-center relative" id="logo-primary">
                {/* Decorative geometric shapes BEHIND the logo (z-0) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-[220px] -translate-y-4 w-20 h-20 bg-sky-100/40 rounded-2xl rotate-12 z-0"></div>
                <div className="absolute top-1/2 right-1/2 translate-x-[200px] -translate-y-8 w-16 h-16 bg-sky-50/60 rounded-full z-0"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-[180px] translate-y-12 w-24 h-24 bg-sky-100/30 rounded-3xl -rotate-6 z-0"></div>
                <div className="absolute top-1/2 right-1/2 translate-x-[180px] translate-y-8 w-18 h-18 bg-sky-50/50 rounded-2xl rotate-12 z-0"></div>
                
                {/* Logo content */}
                <div className="flex flex-col items-center justify-center gap-2 relative z-10">
                  <div className="text-5xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                    JobAutometa
                  </div>
                </div>
                
                {/* Decorative geometric shapes IN FRONT of logo (z-20) - very close to text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-[260px] -translate-y-20 w-10 h-10 border-2 border-sky-300 rounded-lg rotate-12 z-20"></div>
                <div className="absolute top-1/2 right-1/2 translate-x-[250px] -translate-y-24 w-7 h-7 border-2 border-sky-400 rounded-full z-20"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-[240px] -translate-y-40 w-4 h-4 bg-sky-400 rounded-full z-20"></div>
                <div className="absolute bottom-1/2 left-1/2 -translate-x-[250px] translate-y-28 w-5 h-5 bg-sky-300 rounded-full z-20"></div>
                <div className="absolute top-1/2 right-1/2 translate-x-[230px] -translate-y-44 w-12 h-12 bg-sky-200/60 rounded-xl rotate-6 z-20"></div>
                <div className="absolute bottom-1/2 right-1/2 translate-x-[240px] translate-y-32 w-8 h-8 border-2 border-sky-300 rounded-lg rotate-45 z-20"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-[200px] translate-y-4 w-5 h-5 bg-sky-200 rounded-full z-20"></div>
                <div className="absolute bottom-1/2 right-1/2 translate-x-[210px] translate-y-48 w-6 h-6 bg-sky-400/70 rounded-full z-20"></div>
              </div>
              <div className="bg-white p-4 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">Primary Logo with Decorations</span>
                  <Button
                    size="sm"
                    onClick={() => handleDownload("logo-primary", "jobautometa-logo-primary")}
                    className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    PNG
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Backgrounds Section */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-4 text-center">Virtual Backgrounds</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Perfect for Zoom, Teams, and other video conferencing platforms (1920x1080)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Virtual Background 1 - Professional Gradient */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video relative" id="vbg-1">
                <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex flex-col items-center justify-center p-12 relative overflow-hidden">
                  {/* Decorative elements BEHIND logo */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-[280px] -translate-y-8 w-32 h-32 bg-sky-500/10 rounded-3xl rotate-12 z-0"></div>
                  <div className="absolute top-1/2 right-1/2 translate-x-[260px] -translate-y-12 w-28 h-28 bg-blue-600/10 rounded-full z-0"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-[240px] translate-y-16 w-36 h-36 bg-sky-400/8 rounded-2xl -rotate-6 z-0"></div>
                  <div className="absolute top-1/2 right-1/2 translate-x-[240px] translate-y-12 w-30 h-30 bg-blue-500/12 rounded-3xl rotate-6 z-0"></div>
                  
                  {/* Logo content */}
                  <div className="relative z-10">
                    <div className="flex flex-col items-center gap-4 mb-6">
                      <div className="text-7xl font-bold text-white">JobAutometa</div>
                    </div>
                    <div className="text-xl text-sky-200 tracking-wider text-center">AI-POWERED JOB AUTOMATION</div>
                  </div>
                  
                  {/* Decorative elements IN FRONT - very close to text */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-[340px] -translate-y-32 w-12 h-12 border-2 border-sky-400/40 rounded-xl rotate-12 z-20"></div>
                  <div className="absolute top-1/2 right-1/2 translate-x-[330px] -translate-y-36 w-10 h-10 border-2 border-sky-300/30 rounded-full z-20"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-[320px] -translate-y-52 w-6 h-6 bg-sky-400/30 rounded-full z-20"></div>
                  <div className="absolute bottom-1/2 left-1/2 -translate-x-[330px] translate-y-40 w-7 h-7 bg-sky-300/25 rounded-full z-20"></div>
                  <div className="absolute top-1/2 right-1/2 translate-x-[310px] -translate-y-56 w-14 h-14 bg-sky-200/20 rounded-xl rotate-6 z-20"></div>
                  <div className="absolute bottom-1/2 right-1/2 translate-x-[320px] translate-y-44 w-9 h-9 border-2 border-sky-400/35 rounded-lg rotate-45 z-20"></div>
                </div>
              </div>
              <div className="bg-white p-4 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">Professional Gradient Blue</span>
                  <Button
                    size="sm"
                    onClick={() => handleDownload("vbg-1", "jobautometa-vbg-gradient-blue")}
                    className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    PNG
                  </Button>
                </div>
              </div>
            </div>

            {/* Virtual Background 2 - Diagonal Split White & Blue */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video relative" id="vbg-2">
                <div className="w-full h-full relative overflow-hidden">
                  {/* Diagonal blue gradient section (bottom) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-300 via-sky-500 to-blue-700"></div>
                  
                  {/* Additional blue shade layers for depth on bottom */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-800/30 via-blue-600/20 to-transparent"></div>
                  
                  {/* Diagonal white section (top) using clip-path */}
                  <div 
                    className="absolute inset-0 bg-white"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
                  ></div>
                  
                  {/* Decorative elements on white side (top) */}
                  <div className="absolute top-8 left-12 w-12 h-12 border-3 border-sky-300/40 rounded-xl rotate-12"></div>
                  <div className="absolute top-20 left-32 w-8 h-8 bg-sky-200/30 rounded-full"></div>
                  <div className="absolute top-16 left-48 w-6 h-6 border-2 border-sky-400/30 rounded-full"></div>
                  
                  {/* Decorative elements on blue side (bottom) */}
                  <div className="absolute bottom-12 right-16 w-16 h-16 border-3 border-white/30 rounded-xl rotate-45"></div>
                  <div className="absolute bottom-24 right-32 w-10 h-10 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-16 right-48 w-8 h-8 border-2 border-white/25 rounded-lg rotate-12"></div>
                  
                  {/* Logo positioned in top left corner */}
                  <div className="absolute top-8 left-8 z-10">
                    <div className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent whitespace-nowrap">
                      JobAutometa
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">Diagonal Split - White & Blue</span>
                  <Button
                    size="sm"
                    onClick={() => handleDownload("vbg-2", "jobautometa-vbg-diagonal-split")}
                    className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    PNG
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sky-200">
            Need custom assets or have questions? Contact us at{" "}
            <a href="mailto:brand@jobautometa.com" className="text-sky-400 hover:text-sky-300">
              brand@jobautometa.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
