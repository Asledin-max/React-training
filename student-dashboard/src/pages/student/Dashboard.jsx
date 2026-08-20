import { Link } from "react-router-dom";
import profile from "../../assets/images/pro-2.png";
import {
  LayoutDashboard,
  GraduationCap,
  ClipboardList,
  ChartNoAxesCombined,
  Settings,
  Search,
  Bell,
  Menu,
  X,
  PlayCircle,
  ArrowRight,
  Code,
  FileCheck,
  Network,
  Calendar1Icon,
  LucideClockArrowDown,
  Clock4Icon,
  FileQuestionIcon,
  Clock4,
  Flame,
  MedalIcon,
  CalendarDays,
  FileWarning,
} from "lucide-react";
import { useState } from "react";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex overflow-hidden">
      {/* side bar */}
      <aside
        className={`fixed inset-y-0 left-0 bg-slate-200 w-52 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-52"
        } lg:translate-x-0 lg:static py-3 px-3 h-full z-50 transition-transform duration-300`}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-blue-700 text-xl">EduFlow LMS</h1>
            <span className="text-slate-500 text-sm">Learning Portal</span>
          </div>
          <X
            className="cursor-pointer hover:scale-80 transition-all duration-300 hover:text-red-400 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        </div>

        {/* links */}
        <div className="flex flex-col gap-3 mt-10 text-slate-500 text-sm">
          <Link
            to="/"
            className="active flex items-center gap-3 hover:text-slate-100 hover:bg-slate-700 p-2 rounded-md transition-colors duration-300"
          >
            <LayoutDashboard size={20} />
            <p>Dashboard</p>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-3 hover:text-slate-100 hover:bg-slate-700 p-2 rounded-md transition-colors duration-300"
          >
            <GraduationCap size={22} />
            <p>My Courses</p>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-3 hover:text-slate-100 hover:bg-slate-700 p-2 rounded-md transition-colors duration-300"
          >
            <ClipboardList size={20} />
            <p>Assignments</p>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-3 hover:text-slate-100 hover:bg-slate-700 p-2 rounded-md transition-colors duration-300"
          >
            <ChartNoAxesCombined size={20} />
            <p>Analytics</p>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-3 hover:text-slate-100 hover:bg-slate-700 p-2 rounded-md transition-colors duration-300"
          >
            <Settings size={20} />
            <p>Resorces</p>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-3 hover:text-slate-100 hover:bg-slate-700 p-2 rounded-md transition-colors duration-300"
          >
            <Settings size={20} />
            <p>Settings</p>
          </Link>
        </div>
      </aside>

      {/* main area with internal vertical scrolling */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        <header className="sticky top-0 p-5 bg-white h-16 flex items-center justify-between border-b border-slate-300 shrink-0">
          <div className="flex items-center w-auto">
            <Menu
              className="cursor-pointer lg:hidden mr-5"
              onClick={() => setSidebarOpen(true)}
            />
            <div className="relative">
              <Search
                size={20}
                className="absolute top-2 text-slate-400 left-4"
              />
              <input
                type="search"
                name="search"
                placeholder="Search courses..."
                id="search"
                className="ml-2 w-auto md:w-96 h-9 flex items-center pl-9 pr-1 rounded-full border border-slate-300 outline-none"
              />
            </div>
          </div>
          <div className="flex items-center gap-3 px-3">
            <Bell size={20} className="cursor-pointer" />
            <img
              src={profile}
              alt="user-image"
              className="w-10 h-10 rounded-full cursor-pointer object-cover border border-slate-400"
            />
          </div>
        </header>

        {/* main body content wrapper */}
        <div className="flex-1 bg-slate-50">
          <div className="p-7">
            <div>
              <h1 className="text-2xl text-black font-semibold">
                Welcome back, Sara
              </h1>
              <p>You've completed 75% of your weekly goal! Keep going!</p>
            </div>
          </div>

          <div className="p-5 flex flex-col md:flex-row max-w-325 gap-10">
            {/* left side */}
            <div className="flex flex-col gap-10 md:w-[65%]">
              {/* card */}
              <div className="container bg-blue-600 w-full h-fit rounded-lg p-5 text-white flex flex-col gap-5">
                <div className="flex gap-2 items-center bg-white/20 rounded-full px-3 py-1 w-fit text-[12px]">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <p>In Progress</p>
                </div>
                <h1 className="text-3xl font-semibold max-w-140">
                  Continue Learning: Advanced JavaScript ES6+
                </h1>
                <div className="flex flex-col xl:flex-row items-center justify-between gap-3">
                  <div className="flex gap-2 items-center">
                    <PlayCircle />
                    <p>Module 4 : Async/Await & Promises • 45 mins left</p>
                  </div>
                  <button
                    type="button"
                    className="flex items-center gap-2 bg-white text-blue-600 p-2 rounded-md cursor-pointer text-xl font-semibold hover:shadow-lg hover:scale-95 transition-transform duration-300"
                  >
                    Resume Lesson <ArrowRight />
                  </button>
                </div>
              </div>

              {/* enrolled courses container */}
              <div className="container flex flex-col justify-center gap-3">
                <div className="flex items-center justify-between font-semibold text-black">
                  <p>Enrolled Courses</p>
                  <Link to="/" className="text-blue-600">
                    View all
                  </Link>
                </div>

                <div className="flex flex-col md:flex-row gap-3">
                  {/* card1 */}
                  <div className="container bg-white lg:w-1/2 p-5 rounded-lg border border-gray-300 flex flex-col gap-5">
                    <div className="flex items-center justify-between">
                      <div className="bg-blue-100 p-2 rounded-md text-blue-900">
                        <Code className="font-bold" />
                      </div>
                      <div className="flex items-center gap-2 bg-red-200 text-red-900 font-bold p-2 rounded-md text-sm">
                        <Clock4Icon size={17} /> Due in 2 days
                      </div>
                    </div>
                    <div className="text-[17px]">
                      <h1 className="font-semibold text-black/80">
                        Modern Web Development
                      </h1>
                      <p className="text-[14px]">Prof. Sarah Jenkins</p>
                    </div>
                    <div className="w-full">
                      <div className="flex items-center justify-between">
                        <span>Progress</span>
                        <span className="text-blue-700 font-semibold">75%</span>
                      </div>
                      <div className="bg-gray-200 h-2 rounded-full mt-2">
                        <div className="bg-blue-700 rounded-full h-2 w-[75%]"></div>
                      </div>
                    </div>
                    <div className="bg-gray-200 text-black/70 font-semibold flex items-center gap-4 p-5 rounded-lg border border-gray-300">
                      <FileCheck size={20} />
                      <span className="text-[14px]">Submit Project 2</span>
                    </div>
                  </div>

                  {/* card2 */}
                  <div className="container bg-white lg:w-1/2 p-5 rounded-lg border border-gray-300 flex flex-col gap-5">
                    <div className="flex items-center justify-between">
                      <div className="bg-red-100 p-2 rounded-md text-red-900">
                        <Network className="font-bold" />
                      </div>
                      <div className="flex items-center gap-2 bg-gray-200 text-gray-600 font-bold p-2 rounded-md text-sm">
                        <Calendar1Icon size={17} /> Due in 2 days
                      </div>
                    </div>
                    <div className="text-[17px]">
                      <h1 className="font-semibold text-black/80">
                        Data Structures & Algorithms
                      </h1>
                      <p className="text-[14px]">Dr. Marcus Vance</p>
                    </div>
                    <div className="w-full">
                      <div className="flex items-center justify-between">
                        <span>Progress</span>
                        <span className="text-red-800 font-semibold">40%</span>
                      </div>
                      <div className="bg-gray-200 h-2 rounded-full mt-2">
                        <div className="bg-red-800 rounded-full h-2 w-[40%]"></div>
                      </div>
                    </div>
                    <div className="bg-gray-200 text-black/70 font-semibold flex items-center gap-4 p-5 rounded-lg border border-gray-300">
                      <FileQuestionIcon size={20} />
                      <span className="text-[14px]">
                        Quiz 3 - Trees & Graphs
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent grade and feedback container */}
              <div className="container flex flex-col justify-center gap-3">
                <div className="flex items-center justify-between font-semibold text-black">
                  <p>Recent Grades & Feedback</p>
                </div>

                <div className="flex flex-col rounded-lg overflow-hidden border border-gray-200 bg-amber-200">
                  <div className="container bg-white p-5 border-b border-gray-300 flex items-center gap-5 w-full">
                    <div>
                      <p className="w-10 h-10 rounded-full bg-blue-100 text-blue-900 text-xl font-semibold flex items-center justify-center border border-gray-300">
                        A
                      </p>
                    </div>
                    <div className="text-[12px] w-full flex flex-col justify-center">
                      <div className="flex items-center justify-between text-sm font-semibold">
                        <h2 className="text-black">
                          React Fundamentals Final Quiz
                        </h2>
                        <h2 className="text-blue-700">94/100</h2>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold">Great job on hooks!</p>
                        <p className="flex items-center gap-1 text-gray-400">
                          <LucideClockArrowDown size={15} /> Graded 2 days ago
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="container bg-white p-5 border-b border-gray-300 flex items-center gap-5 w-full">
                    <div>
                      <p className="w-10 h-10 rounded-full bg-gray-100 text-gray-900 text-lg font-semibold flex items-center justify-center border border-gray-300">
                        B+
                      </p>
                    </div>
                    <div className="text-[12px] w-full flex flex-col justify-center">
                      <div className="flex items-center justify-between text-sm font-semibold">
                        <h2 className="text-black">
                          CSS Grid & Flexbox Assignment
                        </h2>
                        <h2 className="text-gray-900">88/100</h2>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold">
                          Watch out for mobile responsiveness.
                        </p>
                        <p className="flex items-center gap-1 text-gray-400">
                          <LucideClockArrowDown size={15} /> Graded 5 days ago
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* right side cards */}
            <div className="md:w-[30%]  rounded-lg ">
              {/* Quick state */}
              <div className="p-3 bg-white border border-gray-200 rounded-lg">
                <h1>Quick States</h1>
                <div className="mt-3 flex flex-col  justify-center gap-3 ">
                  <div className="grid grid-col-1 md:grid-cols-1 xl:grid-cols-2  gap-3 ">
                    <div className="flex flex-col items-center justify-center w-full bg-gray-200 h-fit p-2 text-sm rounded-lg">
                      <Clock4 className="text-blue-600" />
                      <p className="font-bold text-black text-lg">8.5 </p>
                      <span>Hours Spent</span>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full bg-red-100 h-fit p-2 text-sm rounded-lg">
                      <Flame className="text-red-700" />
                      <p className="font-bold text-red-900 text-lg">5 Days </p>
                      <span className="text-red-500/60">Streak</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center w-full bg-gray-200 h-fit p-2 text-sm rounded-lg">
                    <MedalIcon className="text-black/70" />
                    <p className="font-bold text-black text-lg">4 </p>
                    <span>Completed Courses</span>
                  </div>
                </div>
              </div>

              {/* upcoming Deadlines */}
              <div className="mt-5  bg-white h-fit w-full rounded-lg border border-gray-300 flex flex-col justify-center">
                <div className="bg-gray-200 text-center flex items-center px-5 gap-3 h-15 ">
                  <CalendarDays className="text-blue-600" />
                  <p>Upcoming Deadlines</p>
                </div>

                <div className="bg-white my-5 flex flex-col px-5 gap-10">
                  <div className="flex flex-col items-start  w-full">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-900 rounded-full"></div>
                      <h2 className="text-black font-semibold">
                        Algorithm Analysis Report{" "}
                      </h2>
                    </div>

                    <div className="text-sm ml-5 flex items-center gap-2 text-red-600 ">
                      <FileWarning size={15} />
                      <span>Due Today, 11:59 PM</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-start  w-full">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-800 rounded-full"></div>
                      <h2 className="text-black font-semibold">
                        JS DOM Manipulation Exercise{" "}
                      </h2>
                    </div>

                    <div className="text-sm ml-5 flex items-center gap-2 text-gray-600 ">
                      <Clock4 size={15} />
                      <span>Due Aug 20</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-start  w-full">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      <h2 className="text-black font-semibold">
                        Database Schema Draft{" "}
                      </h2>
                    </div>

                    <div className="text-sm ml-5 flex items-center gap-2 text-gray-600 ">
                      <Calendar1Icon size={15} />
                      <span>Due Aug 24</span>
                    </div>
                  </div>
                </div>

                <Link className="text-blue-600 cursor-pointer font-semibold bg-gray-200 flex items-center justify-center h-15">
                  View Calendar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
