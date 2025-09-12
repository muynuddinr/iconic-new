'use client'

import React, { useEffect, useState } from 'react'
import { 
  Search, 
  Filter, 
  MessageSquare,
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Eye,
  Reply,
  Archive,
  Trash2,
  MoreVertical
} from 'lucide-react'

const ContactManagement = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [selectedContacts, setSelectedContacts] = useState<string[]>([])

  type Contact = {
    id: string
    name?: string
    company?: string
    email: string
    phone?: string
    message: string
    createdAt: string
    status?: string
    priority?: string
  }

  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [viewing, setViewing] = useState<Contact | null>(null)

  useEffect(() => {
    let mounted = true
    async function load() {
      try {
        setLoading(true)
        const res = await fetch('/api/contacts', { cache: 'no-store' })
        const data = await res.json()
        if (!res.ok) throw new Error(data?.message || 'Failed to load contacts')
        if (mounted) setContacts(data.data as Contact[])
      } catch (e: any) {
        if (mounted) setError(e?.message || 'Failed to load contacts')
      } finally {
        if (mounted) setLoading(false)
      }
    }
    load()
    return () => { mounted = false }
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-green-100 text-green-800'
      case 'responded': return 'bg-blue-100 text-blue-800'
      case 'in-progress': return 'bg-yellow-100 text-yellow-800'
      case 'archived': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredContacts = contacts.filter(contact => {
    const name = (contact.name || '').toLowerCase()
    const company = (contact.company || '').toLowerCase()
    const email = (contact.email || '').toLowerCase()
    const matchesSearch = name.includes(searchTerm.toLowerCase()) ||
                         company.includes(searchTerm.toLowerCase()) ||
                         email.includes(searchTerm.toLowerCase())
    const statusVal = (contact.status || 'new')
    const matchesFilter = filterStatus === 'all' || statusVal === filterStatus
    return matchesSearch && matchesFilter
  })

  const handleSelectContact = (contactId: string) => {
    setSelectedContacts(prev => 
      prev.includes(contactId) 
        ? prev.filter(id => id !== contactId)
        : [...prev, contactId]
    )
  }

  const handleSelectAll = () => {
    setSelectedContacts(
      selectedContacts.length === filteredContacts.length 
        ? [] 
        : filteredContacts.map(contact => contact.id)
    )
  }

  return (
    <div className="space-y-6">
      {error && (
        <div className="rounded-md border border-red-200 bg-red-50 text-red-800 px-4 py-3 text-sm">
          {error}
        </div>
      )}
      {loading && (
        <div className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600">
          Loading contacts...
        </div>
      )}
      {/* Header Actions */}
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex sm:items-center sm:space-x-4">
            <div className="flex items-center">
              <h3 className="text-lg font-medium text-gray-900">Contact Submissions</h3>
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#1479ae] text-white">
                {filteredContacts.length}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 sm:mt-0 sm:flex sm:space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1479ae]">
            <Archive className="h-4 w-4 mr-2" />
            Archive Selected
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1479ae] hover:bg-[#116896] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1479ae]">
            <Reply className="h-4 w-4 mr-2" />
            Bulk Reply
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700">Search</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                name="search"
                id="search"
                className="focus:ring-[#1479ae] focus:border-[#1479ae] block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="Search contacts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
            <select
              id="status"
              name="status"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#1479ae] focus:border-[#1479ae] sm:text-sm rounded-md"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="responded">Responded</option>
              <option value="in-progress">In Progress</option>
              <option value="archived">Archived</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1479ae]">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </button>
          </div>
        </div>
      </div>

      {/* Contacts Table */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 sm:px-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-[#1479ae] focus:ring-[#1479ae] border-gray-300 rounded"
              checked={selectedContacts.length === filteredContacts.length && filteredContacts.length > 0}
              onChange={handleSelectAll}
            />
            <span className="ml-2 text-sm text-gray-500">
              {selectedContacts.length} of {filteredContacts.length} selected
            </span>
          </div>
        </div>
        <ul className="divide-y divide-gray-200">
          {filteredContacts.map((contact) => (
            <li key={contact.id} className="hover:bg-gray-50">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-[#1479ae] focus:ring-[#1479ae] border-gray-300 rounded mr-4"
                      checked={selectedContacts.includes(contact.id)}
                      onChange={() => handleSelectContact(contact.id)}
                    />
                    <div className="flex-shrink-0 h-12 w-12">
                      <div className="h-12 w-12 rounded-full bg-[#1479ae] flex items-center justify-center">
                        <span className="text-sm font-medium text-white">
                          {(contact.name || 'U N').split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4 flex-1 min-w-0">
                      <div className="flex items-center">
                        <p className="text-sm font-medium text-gray-900 truncate">{contact.name || 'Unknown'}</p>
                        <span className={`ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(contact.status || 'new')}`}>
                          {(contact.status || 'new').replace('-', ' ')}
                        </span>
                        <span className={`ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(contact.priority || 'medium')}`}>
                          {contact.priority || 'medium'}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <span className="font-medium">{contact.company}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Mail className="h-4 w-4 mr-1" />
                        {contact.email}
                        <Phone className="h-4 w-4 ml-4 mr-1" />
                        {contact.phone}
                        <Calendar className="h-4 w-4 ml-4 mr-1" />
                        {new Date(contact.createdAt || Date.now()).toLocaleDateString()}
                      </div>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">{contact.message}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => setViewing(contact)} className="inline-flex items-center p-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1479ae]">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="inline-flex items-center p-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1479ae]">
                      <Reply className="h-4 w-4" />
                    </button>
                    <button className="inline-flex items-center p-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1479ae]">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        
        {filteredContacts.length === 0 && (
          <div className="text-center py-12">
            <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No contacts found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {searchTerm || filterStatus !== 'all' 
                ? 'Try adjusting your search or filter criteria.'
                : 'No contact submissions yet.'}
            </p>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Previous
          </button>
          <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Next
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredContacts.length}</span> of{' '}
              <span className="font-medium">{filteredContacts.length}</span> results
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                Previous
              </button>
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                1
              </button>
              <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
      {/* View Modal */}
      {viewing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setViewing(null)} />
          <div className="relative w-full max-w-lg rounded-lg bg-white shadow-lg">
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
              <h3 className="text-base font-semibold text-gray-900">Contact Details</h3>
              <button onClick={() => setViewing(null)} className="rounded-md p-1.5 text-gray-500 hover:bg-gray-100">
                ✕
              </button>
            </div>
            <div className="px-4 py-4 space-y-3 text-sm text-gray-700">
              <div>
                <span className="font-medium">Name: </span>{viewing.name || 'Unknown'}
              </div>
              <div>
                <span className="font-medium">Company: </span>{viewing.company || '-'}
              </div>
              <div className="flex items-center"><Mail className="h-4 w-4 mr-2" />{viewing.email}</div>
              <div className="flex items-center"><Phone className="h-4 w-4 mr-2" />{viewing.phone || '-'}</div>
              <div className="flex items-center"><Calendar className="h-4 w-4 mr-2" />{new Date(viewing.createdAt || Date.now()).toLocaleString()}</div>
              <div className="pt-2">
                <div className="font-medium mb-1">Message</div>
                <div className="whitespace-pre-wrap rounded border border-gray-200 bg-gray-50 p-3 text-gray-800">
                  {viewing.message}
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2 border-t border-gray-200 px-4 py-3">
              <button onClick={() => setViewing(null)} className="rounded-md border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ContactManagement
