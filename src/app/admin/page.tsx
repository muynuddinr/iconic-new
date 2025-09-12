'use client'

import React from 'react'
import { 
  MessageSquare, 
  Users, 
  TrendingUp, 
  Clock,
  Mail,
  Phone,
  MapPin,
  Settings
} from 'lucide-react'

const AdminDashboard = () => {
  // Mock data - in a real app, this would come from your backend
  const stats = [
    { name: 'Total Contacts', value: '24', icon: MessageSquare, change: '+12%', changeType: 'positive' },
    { name: 'New This Week', value: '8', icon: TrendingUp, change: '+3', changeType: 'positive' },
    { name: 'Response Rate', value: '94%', icon: Users, change: '+2%', changeType: 'positive' },
    { name: 'Avg Response Time', value: '2.4h', icon: Clock, change: '-0.5h', changeType: 'positive' },
  ]

  const recentContacts = [
    {
      id: 1,
      name: 'John Smith',
      company: 'Tech Solutions Inc.',
      email: 'john@techsolutions.com',
      phone: '+1 (555) 123-4567',
      message: 'Interested in your industrial automation services...',
      date: '2024-01-15',
      status: 'new'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      company: 'Manufacturing Co.',
      email: 'sarah@manufacturing.com',
      phone: '+1 (555) 987-6543',
      message: 'Need consultation for our production line...',
      date: '2024-01-14',
      status: 'responded'
    },
    {
      id: 3,
      name: 'Mike Chen',
      company: 'Auto Parts Ltd.',
      email: 'mike@autoparts.com',
      phone: '+1 (555) 456-7890',
      message: 'Looking for quality control solutions...',
      date: '2024-01-13',
      status: 'in-progress'
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-green-100 text-green-800'
      case 'responded': return 'bg-blue-100 text-blue-800'
      case 'in-progress': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <stat.icon className="h-6 w-6 text-[#1479ae]" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                      <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                        stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.change}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Contacts */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Contact Submissions</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Latest inquiries and messages from potential customers
          </p>
        </div>
        <ul className="divide-y divide-gray-200">
          {recentContacts.map((contact) => (
            <li key={contact.id}>
              <div className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <div className="h-10 w-10 rounded-full bg-[#1479ae] flex items-center justify-center">
                        <span className="text-sm font-medium text-white">
                          {contact.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center">
                        <p className="text-sm font-medium text-gray-900">{contact.name}</p>
                        <span className={`ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(contact.status)}`}>
                          {contact.status.replace('-', ' ')}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Mail className="h-4 w-4 mr-1" />
                        {contact.email}
                        <Phone className="h-4 w-4 ml-4 mr-1" />
                        {contact.phone}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{contact.message}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {new Date(contact.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="bg-gray-50 px-4 py-3 sm:px-6">
          <div className="text-sm">
            <a href="/Admin/contacts" className="font-medium text-[#1479ae] hover:text-[#116896]">
              View all contacts →
            </a>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Quick Actions</h3>
          <div className="mt-5">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <button className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#1479ae] rounded-lg border border-gray-300 hover:border-gray-400">
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-[#1479ae] text-white">
                    <MessageSquare className="h-6 w-6" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium">
                    <a href="/Admin/contacts" className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      View All Contacts
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Manage and respond to customer inquiries
                  </p>
                </div>
              </button>

              <button className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#1479ae] rounded-lg border border-gray-300 hover:border-gray-400">
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-[#1479ae] text-white">
                    <MapPin className="h-6 w-6" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium">
                    <a href="/Contact" className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      View Contact Page
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    See how the contact form appears to visitors
                  </p>
                </div>
              </button>

              <button className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#1479ae] rounded-lg border border-gray-300 hover:border-gray-400">
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-[#1479ae] text-white">
                    <Settings className="h-6 w-6" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium">
                    <a href="/Admin/settings" className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      Settings
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Configure admin panel and site settings
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
