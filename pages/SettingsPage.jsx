import React from "react";
import { Save, User, Shield, Bell, Database, Monitor } from "lucide-react";

const SettingsPage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-slate-800">Account Settings</h1>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="flex border-b border-slate-100">
          <button className="px-6 py-4 text-sm font-semibold text-blue-600 border-b-2 border-blue-600">
            Profile
          </button>
          <button className="px-6 py-4 text-sm font-semibold text-slate-500 hover:text-slate-800">
            Security
          </button>
          <button className="px-6 py-4 text-sm font-semibold text-slate-500 hover:text-slate-800">
            Notifications
          </button>
        </div>

        <div className="p-6 space-y-8">
          <section>
            <div className="flex items-center space-x-2 mb-4">
              <User className="w-5 h-5 text-slate-400" />
              <h2 className="font-bold text-slate-800">Personal Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="Alex Rivers"
                  className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="alex@dashboard.io"
                  className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-1 md:col-span-2">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Role Description
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                  defaultValue="Senior Cloud Architect & Systems Admin. Leading the infrastructure transformation."
                />
              </div>
            </div>
          </section>

          <section className="pt-8 border-t border-slate-100">
            <div className="flex items-center space-x-2 mb-4">
              <Monitor className="w-5 h-5 text-slate-400" />
              <h2 className="font-bold text-slate-800">System Preferences</h2>
            </div>
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-100">
              <div>
                <h3 className="text-sm font-bold text-blue-900">
                  Automated Daily Insights
                </h3>
                <p className="text-xs text-blue-700 mt-1">
                  Receive daily system performance summaries and trend analysis.
                </p>
              </div>
              <div className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  defaultChecked
                />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </div>
            </div>
          </section>

          <div className="flex justify-end pt-4">
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
