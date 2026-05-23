import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Home, BookOpen, BarChart3, Upload, Menu, X, Pill, Calculator, User } from 'lucide-react';
import { CalculatorDrawer } from '@/components/calculators/calculator-drawer';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/cases', label: 'Case Library', icon: BookOpen },
  { path: '/dashboard', label: 'Analytics', icon: BarChart3 },
  { path: '/profile', label: 'Profile', icon: User },
  { path: '/import', label: 'Import Case', icon: Upload },
];

export function AppShell() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Standard Top Navigation Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo area */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <Pill size={18} className="text-white" />
              </div>
              <span className="font-bold text-slate-900 text-lg tracking-tight">PharmD Simulator</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1 items-center">
              {navItems.map(item => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                      isActive 
                        ? 'bg-slate-100 text-slate-900' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`
                  }
                >
                  <item.icon size={16} />
                  {item.label}
                </NavLink>
              ))}
              <div className="h-4 w-px bg-slate-200 mx-2"></div>
              <button
                onClick={() => setCalculatorOpen(true)}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-950 transition-colors flex items-center gap-2"
              >
                <Calculator size={16} className="text-blue-600" />
                Calculators
              </button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(item => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium flex items-center gap-3 ${
                      isActive 
                        ? 'bg-blue-50 text-blue-700' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`
                  }
                >
                  <item.icon size={18} />
                  {item.label}
                </NavLink>
              ))}
              <div className="border-t border-slate-100 my-1 pt-1">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setCalculatorOpen(true);
                  }}
                  className="w-full text-left block px-3 py-2 rounded-md text-base font-medium flex items-center gap-3 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                >
                  <Calculator size={18} className="text-blue-600" />
                  Calculators
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full bg-slate-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>

      {/* Global Calculator Drawer */}
      <CalculatorDrawer isOpen={calculatorOpen} onClose={() => setCalculatorOpen(false)} />
    </div>
  );
}
