'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  MessageSquare, 
  Settings, 
  Menu, 
  X,
  LogOut,
  Home
} from 'lucide-react'

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Contact Management', href: '/admin/contacts', icon: MessageSquare },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile overlay + drawer */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-slate-900/50" onClick={() => setSidebarOpen(false)} />
        <div className="relative flex flex-col max-w-xs w-full h-full bg-white border-r border-slate-200">
          <div className="flex items-center justify-between px-4 h-14 border-b border-slate-200">
            <span className="font-semibold text-slate-800">Iconic Admin</span>
            <button
              type="button"
              className="inline-flex items-center justify-center h-9 w-9 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-100"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto py-3">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`mx-2 flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              )
            })}
          </nav>
          <div className="border-t border-slate-200 p-3">
            <form action="/api/auth/logout" method="POST">
              <button className="w-full inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50">
                <LogOut className="h-4 w-4" />
                Sign out
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed inset-y-0 z-40 w-68 flex-col border-r border-slate-200 bg-white">
        <div className="h-14 flex items-center px-4 border-b border-slate-200">
          <span className="text-lg font-semibold text-slate-800">Iconic Admin</span>
        </div>
        <nav className="flex-1 overflow-y-auto py-3">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative mx-3 flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {/* Active indicator */}
                {isActive && <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded bg-blue-600" />}
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            )
          })}
        </nav>
        <div className="border-t border-slate-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-800">Admin User</p>
              <p className="text-xs text-slate-500">admin@example.com</p>
            </div>
            <form action="/api/auth/logout" method="POST">
              <button className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50">
                <LogOut className="h-4 w-4" />
                Sign out
              </button>
            </form>
          </div>
        </div>
      </aside>

      {/* Top bar */}
      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 h-14 bg-white/80 backdrop-blur border-b border-slate-200 flex items-center px-3 sm:px-4 lg:px-6">
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center h-9 w-9 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex-1 min-w-0">
            <h2 className="truncate text-base sm:text-lg font-semibold text-slate-800">
              {pathname === '/admin' ? 'Dashboard' : 
               pathname === '/admin/contacts' ? 'Contact Management' : 
               pathname === '/admin/settings' ? 'Settings' : 'Admin Panel'}
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
            >
              <Home className="h-4 w-4" />
              View Site
            </Link>
          </div>
        </header>

        {/* Content */}
        <main className="px-3 sm:px-4 lg:px-6 py-6">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}


