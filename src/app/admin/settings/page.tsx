'use client'

import React, { useState } from 'react'
import { 
  Save, 
  Mail, 
  Phone, 
  MapPin, 
  Globe,
  Bell,
  Shield,
  Database
} from 'lucide-react'

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    // Contact Information
    companyName: 'Iconic Solutions',
    productionOffice: 'Plot No. 3/540, A to R, Ganga Nagar, Bedarapalli, Hosur-635126 Tamil Nadu',
    email: 'info@iconicsolutions.com',
    salesEmail: 'sales@iconicsolutions.com',
    phone1: '+91 8056554761',
    phone2: '+91 9789756826',
    phone3: '+91 9629466826',
    gstInnovation: '33AAICI2795M1Z2',
    gstIndus: '29BKYPD9433R1ZW',
    
    // Notification Settings
    emailNotifications: true,
    newContactAlerts: true,
    responseReminders: true,
    weeklyReports: true,
    
    // Admin Settings
    adminEmail: 'admin@iconicsolutions.com',
    autoResponse: false,
    responseMessage: 'Thank you for contacting us. We will get back to you within 24 hours.',
    
    // Security
    sessionTimeout: 30,
    twoFactorAuth: false,
    passwordPolicy: 'strong'
  })

  const handleInputChange = (field: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSave = () => {
    // In a real app, this would save to your backend
    console.log('Saving settings:', settings)
    alert('Settings saved successfully!')
  }

  return (
    <div className="space-y-6">
      {/* Contact Information Settings */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
            <Mail className="h-5 w-5 mr-2 text-[#1479ae]" />
            Contact Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Update your company contact details that appear on the website.
          </p>
          
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  className="shadow-sm focus:ring-[#1479ae] focus:border-[#1479ae] block w-full sm:text-sm border-gray-300 rounded-md"
                  value={settings.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="productionOffice" className="block text-sm font-medium text-gray-700">
                Production Office Address
              </label>
              <div className="mt-1">
                <textarea
                  name="productionOffice"
                  id="productionOffice"
                  rows={3}
                  className="shadow-sm focus:ring-[#1479ae] focus:border-[#1479ae] block w-full sm:text-sm border-gray-300 rounded-md"
                  value={settings.productionOffice}
                  onChange={(e) => handleInputChange('productionOffice', e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                General Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="shadow-sm focus:ring-[#1479ae] focus:border-[#1479ae] block w-full sm:text-sm border-gray-300 rounded-md"
                  value={settings.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="salesEmail" className="block text-sm font-medium text-gray-700">
                Sales Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="salesEmail"
                  id="salesEmail"
                  className="shadow-sm focus:ring-[#1479ae] focus:border-[#1479ae] block w-full sm:text-sm border-gray-300 rounded-md"
                  value={settings.salesEmail}
                  onChange={(e) => handleInputChange('salesEmail', e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="adminEmail" className="block text-sm font-medium text-gray-700">
                Admin Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="adminEmail"
                  id="adminEmail"
                  className="shadow-sm focus:ring-[#1479ae] focus:border-[#1479ae] block w-full sm:text-sm border-gray-300 rounded-md"
                  value={settings.adminEmail}
                  onChange={(e) => handleInputChange('adminEmail', e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="phone1" className="block text-sm font-medium text-gray-700">
                Phone 1
              </label>
              <div className="mt-1">
                <input
                  type="tel"
                  name="phone1"
                  id="phone1"
                  className="shadow-sm focus:ring-[#1479ae] focus:border-[#1479ae] block w-full sm:text-sm border-gray-300 rounded-md"
                  value={settings.phone1}
                  onChange={(e) => handleInputChange('phone1', e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="phone2" className="block text-sm font-medium text-gray-700">
                Phone 2
              </label>
              <div className="mt-1">
                <input
                  type="tel"
                  name="phone2"
                  id="phone2"
                  className="shadow-sm focus:ring-[#1479ae] focus:border-[#1479ae] block w-full sm:text-sm border-gray-300 rounded-md"
                  value={settings.phone2}
                  onChange={(e) => handleInputChange('phone2', e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="phone3" className="block text-sm font-medium text-gray-700">
                Phone 3
              </label>
              <div className="mt-1">
                <input
                  type="tel"
                  name="phone3"
                  id="phone3"
                  className="shadow-sm focus:ring-[#1479ae] focus:border-[#1479ae] block w-full sm:text-sm border-gray-300 rounded-md"
                  value={settings.phone3}
                  onChange={(e) => handleInputChange('phone3', e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="gstInnovation" className="block text-sm font-medium text-gray-700">
                Innovation GST
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="gstInnovation"
                  id="gstInnovation"
                  className="shadow-sm focus:ring-[#1479ae] focus:border-[#1479ae] block w-full sm:text-sm border-gray-300 rounded-md"
                  value={settings.gstInnovation}
                  onChange={(e) => handleInputChange('gstInnovation', e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="gstIndus" className="block text-sm font-medium text-gray-700">
                Indus GST
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="gstIndus"
                  id="gstIndus"
                  className="shadow-sm focus:ring-[#1479ae] focus:border-[#1479ae] block w-full sm:text-sm border-gray-300 rounded-md"
                  value={settings.gstIndus}
                  onChange={(e) => handleInputChange('gstIndus', e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
            <Bell className="h-5 w-5 mr-2 text-[#1479ae]" />
            Notification Settings
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Configure how you receive notifications about new contacts and inquiries.
          </p>
          
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900">Email Notifications</h4>
                <p className="text-sm text-gray-500">Receive email notifications for admin activities</p>
              </div>
              <input
                type="checkbox"
                className="h-4 w-4 text-[#1479ae] focus:ring-[#1479ae] border-gray-300 rounded"
                checked={settings.emailNotifications}
                onChange={(e) => handleInputChange('emailNotifications', e.target.checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900">New Contact Alerts</h4>
                <p className="text-sm text-gray-500">Get notified immediately when new contacts are submitted</p>
              </div>
              <input
                type="checkbox"
                className="h-4 w-4 text-[#1479ae] focus:ring-[#1479ae] border-gray-300 rounded"
                checked={settings.newContactAlerts}
                onChange={(e) => handleInputChange('newContactAlerts', e.target.checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900">Response Reminders</h4>
                <p className="text-sm text-gray-500">Receive reminders for unanswered contacts</p>
              </div>
              <input
                type="checkbox"
                className="h-4 w-4 text-[#1479ae] focus:ring-[#1479ae] border-gray-300 rounded"
                checked={settings.responseReminders}
                onChange={(e) => handleInputChange('responseReminders', e.target.checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900">Weekly Reports</h4>
                <p className="text-sm text-gray-500">Receive weekly summary reports</p>
              </div>
              <input
                type="checkbox"
                className="h-4 w-4 text-[#1479ae] focus:ring-[#1479ae] border-gray-300 rounded"
                checked={settings.weeklyReports}
                onChange={(e) => handleInputChange('weeklyReports', e.target.checked)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Auto Response Settings */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
            <Globe className="h-5 w-5 mr-2 text-[#1479ae]" />
            Auto Response Settings
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Configure automatic responses for contact form submissions.
          </p>
          
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900">Enable Auto Response</h4>
                <p className="text-sm text-gray-500">Automatically send a response to new contact submissions</p>
              </div>
              <input
                type="checkbox"
                className="h-4 w-4 text-[#1479ae] focus:ring-[#1479ae] border-gray-300 rounded"
                checked={settings.autoResponse}
                onChange={(e) => handleInputChange('autoResponse', e.target.checked)}
              />
            </div>

            <div>
              <label htmlFor="responseMessage" className="block text-sm font-medium text-gray-700">
                Auto Response Message
              </label>
              <div className="mt-1">
                <textarea
                  name="responseMessage"
                  id="responseMessage"
                  rows={4}
                  className="shadow-sm focus:ring-[#1479ae] focus:border-[#1479ae] block w-full sm:text-sm border-gray-300 rounded-md"
                  value={settings.responseMessage}
                  onChange={(e) => handleInputChange('responseMessage', e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
            <Shield className="h-5 w-5 mr-2 text-[#1479ae]" />
            Security Settings
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Configure security settings for the admin panel.
          </p>
          
          <div className="mt-6 space-y-4">
            <div>
              <label htmlFor="sessionTimeout" className="block text-sm font-medium text-gray-700">
                Session Timeout (minutes)
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="sessionTimeout"
                  id="sessionTimeout"
                  min="5"
                  max="480"
                  className="shadow-sm focus:ring-[#1479ae] focus:border-[#1479ae] block w-full sm:text-sm border-gray-300 rounded-md"
                  value={settings.sessionTimeout}
                  onChange={(e) => handleInputChange('sessionTimeout', parseInt(e.target.value))}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h4>
                <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
              </div>
              <input
                type="checkbox"
                className="h-4 w-4 text-[#1479ae] focus:ring-[#1479ae] border-gray-300 rounded"
                checked={settings.twoFactorAuth}
                onChange={(e) => handleInputChange('twoFactorAuth', e.target.checked)}
              />
            </div>

            <div>
              <label htmlFor="passwordPolicy" className="block text-sm font-medium text-gray-700">
                Password Policy
              </label>
              <div className="mt-1">
                <select
                  name="passwordPolicy"
                  id="passwordPolicy"
                  className="shadow-sm focus:ring-[#1479ae] focus:border-[#1479ae] block w-full sm:text-sm border-gray-300 rounded-md"
                  value={settings.passwordPolicy}
                  onChange={(e) => handleInputChange('passwordPolicy', e.target.value)}
                >
                  <option value="basic">Basic (8+ characters)</option>
                  <option value="strong">Strong (12+ characters, special chars)</option>
                  <option value="very-strong">Very Strong (16+ characters, complex)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleSave}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#1479ae] hover:bg-[#116896] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1479ae]"
        >
          <Save className="h-4 w-4 mr-2" />
          Save Settings
        </button>
      </div>
    </div>
  )
}

export default AdminSettings
