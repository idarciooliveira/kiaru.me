import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Link, useNavigate } from "react-router";

export default function LinktreeSignup() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex">
      {/* Left side - Signup form */}
      <div className="flex-1 flex flex-col justify-center px-8 py-12 bg-white max-w-md mx-auto">
        <div className="w-full max-w-sm mx-auto">
          {/* Logo */}
          <div className="mb-12">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold text-black">Linktree</span>
              <span className="text-2xl text-green-500">*</span>
            </div>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-black mb-2">
              Join Linktree
            </h1>
            <p className="text-gray-600">Sign up for free!</p>
          </div>

          {/* Email form */}
          <div className="space-y-4 mb-6">
            <div>
              <Input
                type="email"
                placeholder="Email"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500"
              />
            </div>
            <Button
              onClick={() => navigate("/setup")}
              className="w-full h-12 bg-gray-300 text-gray-500 rounded-full font-medium hover:bg-gray-300 "
            >
              Continue
            </Button>
          </div>

          {/* Privacy notice */}
          <div className="mb-6">
            <p className="text-xs text-gray-500 text-center leading-relaxed">
              By clicking <span className="font-medium">Create account</span>,
              you agree to Linktree's{" "}
              <Link to="#" className="underline">
                privacy notice
              </Link>
              ,{" "}
              <Link to="#" className="underline">
                T&Cs
              </Link>{" "}
              and to receive offers, news and updates.
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center mb-6">
            <Separator className="flex-1" />
            <span className="px-4 text-gray-500 text-sm">OR</span>
            <Separator className="flex-1" />
          </div>

          {/* Social login buttons */}
          <div className="space-y-3 mb-8">
            <Button
              variant="outline"
              className="w-full h-12 border border-gray-300 rounded-full font-medium text-gray-700 hover:bg-gray-50 bg-transparent"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Sign up with Google
            </Button>
            <Button
              variant="outline"
              className="w-full h-12 border border-gray-300 rounded-full font-medium text-gray-700 hover:bg-gray-50 bg-transparent"
            >
              <svg
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
              </svg>
              Sign up with Apple
            </Button>
          </div>

          {/* Login link */}
          <div className="text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link to={"/"} className="text-blue-600 hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>

        {/* Cookie preferences */}
        <div className="absolute bottom-4 left-4">
          <Link to="#" className="text-xs text-gray-500 hover:underline">
            Cookie preferences
          </Link>
        </div>
      </div>

      {/* Right side - Preview */}
      <div className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
          {/* Professional portfolio preview */}
          <div className="absolute inset-0 flex items-start justify-center p-8 overflow-y-auto">
            <div className="w-full max-w-md space-y-6 mt-8">
              {/* Top icons */}
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-sm"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-sm"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-sm"></div>
                    <div className="w-2 h-2 bg-red-400 rounded-sm"></div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </div>
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Profile section */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-red-500 overflow-hidden flex-shrink-0">
                  <img
                    src="/placeholder.svg?height=64&width=64"
                    alt="Alex Rodriguez"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-white text-xl font-bold mb-1">
                    Alex Rodriguez
                  </h2>
                  <p className="text-blue-200 text-sm font-medium mb-2">
                    Senior Product Designer
                  </p>
                  <p className="text-blue-300 text-xs leading-relaxed">
                    Passionate designer crafting digital experiences that blend
                    creativity with user-centered thinking. 5+ years in tech.
                  </p>
                </div>
              </div>

              {/* Contact buttons */}
              <div className="grid grid-cols-4 gap-3 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                  <div className="w-6 h-6 mx-auto mb-2 text-blue-200">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <span className="text-blue-200 text-xs">Email</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                  <div className="w-6 h-6 mx-auto mb-2 text-blue-200">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <span className="text-blue-200 text-xs">Phone</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                  <div className="w-6 h-6 mx-auto mb-2 text-blue-200">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <span className="text-blue-200 text-xs">LinkedIn</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                  <div className="w-6 h-6 mx-auto mb-2 text-blue-200">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                  <span className="text-blue-200 text-xs">Portfolio</span>
                </div>
              </div>

              {/* Key Projects */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <svg
                    className="w-5 h-5 text-blue-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  <h3 className="text-white font-semibold">Key Projects</h3>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="aspect-square bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.svg?height=80&width=80"
                      alt="Project 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.svg?height=80&width=80"
                      alt="Project 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-green-500 to-teal-500 rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.svg?height=80&width=80"
                      alt="Project 3"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-pink-500 to-red-500 rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.svg?height=80&width=80"
                      alt="Project 4"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.svg?height=80&width=80"
                      alt="Project 5"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.svg?height=80&width=80"
                      alt="Project 6"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Experience & Skills */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <svg
                    className="w-5 h-5 text-blue-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6"
                    />
                  </svg>
                  <h3 className="text-white font-semibold">
                    Experience & Skills
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-white font-medium">
                          Senior Product Designer
                        </h4>
                        <p className="text-blue-300 text-sm">TechFlow Inc.</p>
                      </div>
                      <span className="text-blue-400 text-xs">
                        2022 - Present
                      </span>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <span className="bg-blue-500/20 text-blue-200 px-2 py-1 rounded-md text-xs">
                        UI/UX Design
                      </span>
                      <span className="bg-blue-500/20 text-blue-200 px-2 py-1 rounded-md text-xs">
                        Figma
                      </span>
                      <span className="bg-blue-500/20 text-blue-200 px-2 py-1 rounded-md text-xs">
                        User Research
                      </span>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-white font-medium">
                          Product Designer
                        </h4>
                        <p className="text-blue-300 text-sm">
                          DesignHub Studio
                        </p>
                      </div>
                      <span className="text-blue-400 text-xs">2020 - 2022</span>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <span className="bg-purple-500/20 text-purple-200 px-2 py-1 rounded-md text-xs">
                        Prototyping
                      </span>
                      <span className="bg-purple-500/20 text-purple-200 px-2 py-1 rounded-md text-xs">
                        Adobe XD
                      </span>
                      <span className="bg-purple-500/20 text-purple-200 px-2 py-1 rounded-md text-xs">
                        Wireframing
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <svg
                    className="w-5 h-5 text-blue-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                  <h3 className="text-white font-semibold">
                    Education & Formation
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-white font-medium">
                          Master in UX/UI Design
                        </h4>
                        <p className="text-blue-300 text-sm">
                          Design Institute
                        </p>
                      </div>
                      <span className="text-blue-400 text-xs">2019 - 2020</span>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-white font-medium">
                          Bachelor in Graphic Design
                        </h4>
                        <p className="text-blue-300 text-sm">Art University</p>
                      </div>
                      <span className="text-blue-400 text-xs">2015 - 2019</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Help button */}
        <div className="absolute bottom-6 right-6">
          <Button className="w-12 h-12 bg-purple-600 hover:bg-purple-700 rounded-full p-0">
            <span className="text-white text-xl">?</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
