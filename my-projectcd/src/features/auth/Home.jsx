// src/features/auth/Home.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './authSlice';

function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [activePage, setActivePage] = useState('dashboard');

  const handleLogout = () => {
    dispatch(logout());
  };

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'whiteboard', label: 'Whiteboard', icon: '📝' },
    { id: 'chatapp', label: 'Chat App', icon: '💬' },
    { id: 'todolist', label: 'Todo List', icon: '✅' },
    { id: 'projects', label: 'Projects', icon: '📁' },
    { id: 'settings', label: 'Settings', icon: '⚙️' }
  ];

  const renderPageContent = () => {
    switch (activePage) {
      case 'dashboard':
        return (
          <>
            {/* Stats Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px',
              marginBottom: '30px'
            }}>
              <div style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>Total Projects</h3>
                <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#007bff', marginBottom: '10px' }}>
                  12
                </div>
                <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                  +2 from last month
                </p>
              </div>

              <div style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>Active Tasks</h3>
                <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#28a745', marginBottom: '10px' }}>
                  8
                </div>
                <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                  3 completed today
                </p>
              </div>

              <div style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>Team Members</h3>
                <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#ffc107', marginBottom: '10px' }}>
                  5
                </div>
                <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                  All online
                </p>
              </div>
            </div>

            {/* Recent Activity */}
            <div style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <h2 style={{ margin: '0 0 20px 0', color: '#333' }}>Recent Activity</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{
                  padding: '15px',
                  border: '1px solid #e9ecef',
                  borderRadius: '4px',
                  backgroundColor: '#f8f9fa'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: '500', color: '#333' }}>New project created</span>
                    <span style={{ fontSize: '12px', color: '#666' }}>2 hours ago</span>
                  </div>
                  <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '14px' }}>
                    "E-commerce Dashboard" project has been created
                  </p>
                </div>

                <div style={{
                  padding: '15px',
                  border: '1px solid #e9ecef',
                  borderRadius: '4px',
                  backgroundColor: '#f8f9fa'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: '500', color: '#333' }}>Task completed</span>
                    <span style={{ fontSize: '12px', color: '#666' }}>4 hours ago</span>
                  </div>
                  <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '14px' }}>
                    "User authentication setup" has been completed
                  </p>
                </div>
              </div>
            </div>
          </>
        );

      case 'whiteboard':
        return (
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            minHeight: '500px'
          }}>
            <h2 style={{ margin: '0 0 20px 0', color: '#333' }}>Whiteboard</h2>
            <div style={{
              border: '2px dashed #ddd',
              borderRadius: '8px',
              padding: '40px',
              textAlign: 'center',
              backgroundColor: '#f8f9fa'
            }}>
              <p style={{ color: '#666', fontSize: '18px' }}>🎨 Whiteboard Coming Soon</p>
              <p style={{ color: '#999', fontSize: '14px' }}>Draw, sketch, and collaborate in real-time</p>
            </div>
          </div>
        );

      case 'chatapp':
        return (
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            minHeight: '500px'
          }}>
            <h2 style={{ margin: '0 0 20px 0', color: '#333' }}>Chat App</h2>
            <div style={{
              border: '1px solid #e9ecef',
              borderRadius: '8px',
              height: '400px',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                padding: '15px',
                borderBottom: '1px solid #e9ecef',
                backgroundColor: '#f8f9fa'
              }}>
                <h3 style={{ margin: 0, color: '#333' }}>Team Chat</h3>
              </div>
              <div style={{
                flex: 1,
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#666'
              }}>
                💬 Chat functionality coming soon
              </div>
            </div>
          </div>
        );

      case 'todolist':
        return (
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            minHeight: '500px'
          }}>
            <h2 style={{ margin: '0 0 20px 0', color: '#333' }}>Todo List</h2>
            <div style={{
              border: '1px solid #e9ecef',
              borderRadius: '8px',
              padding: '20px'
            }}>
              <div style={{ marginBottom: '20px' }}>
                <input
                  type="text"
                  placeholder="Add a new task..."
                  style={{
                    width: '70%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    marginRight: '10px'
                  }}
                />
                <button style={{
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}>
                  Add Task
                </button>
              </div>
              
              <div style={{ color: '#666', textAlign: 'center', padding: '40px' }}>
                ✅ Todo list functionality coming soon
              </div>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            minHeight: '500px'
          }}>
            <h2 style={{ margin: '0 0 20px 0', color: '#333' }}>Projects</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px'
            }}>
              <div style={{
                border: '1px solid #e9ecef',
                borderRadius: '8px',
                padding: '20px'
              }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>E-commerce Dashboard</h3>
                <p style={{ color: '#666', fontSize: '14px', margin: '0 0 15px 0' }}>
                  A comprehensive dashboard for managing online store operations
                </p>
                <span style={{
                  backgroundColor: '#28a745',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  fontSize: '12px'
                }}>
                  Active
                </span>
              </div>

              <div style={{
                border: '1px solid #e9ecef',
                borderRadius: '8px',
                padding: '20px'
              }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>Mobile App</h3>
                <p style={{ color: '#666', fontSize: '14px', margin: '0 0 15px 0' }}>
                  Cross-platform mobile application for iOS and Android
                </p>
                <span style={{
                  backgroundColor: '#ffc107',
                  color: '#333',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  fontSize: '12px'
                }}>
                  In Progress
                </span>
              </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            minHeight: '500px'
          }}>
            <h2 style={{ margin: '0 0 20px 0', color: '#333' }}>Settings</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{
                border: '1px solid #e9ecef',
                borderRadius: '8px',
                padding: '20px'
              }}>
                <h3 style={{ margin: '0 0 15px 0', color: '#333' }}>Account Settings</h3>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Email</label>
                  <input
                    type="email"
                    value={user?.email || ''}
                    readOnly
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      backgroundColor: '#f8f9fa'
                    }}
                  />
                </div>
                <button style={{
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}>
                  Update Profile
                </button>
              </div>

              <div style={{
                border: '1px solid #e9ecef',
                borderRadius: '8px',
                padding: '20px'
              }}>
                <h3 style={{ margin: '0 0 15px 0', color: '#333' }}>Preferences</h3>
                <p style={{ color: '#666', fontSize: '14px' }}>
                  Theme, notifications, and other preferences coming soon...
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      display: 'flex'
    }}>
      {/* Sidebar */}
      <div style={{
        width: '250px',
        backgroundColor: '#343a40',
        color: 'white',
        padding: '20px 0',
        position: 'fixed',
        height: '100vh',
        overflowY: 'auto'
      }}>
        <div style={{
          padding: '0 20px',
          marginBottom: '30px'
        }}>
          <h2 style={{ margin: 0, color: 'white', fontSize: '20px' }}>MyApp</h2>
          <p style={{ margin: '5px 0 0 0', color: '#adb5bd', fontSize: '12px' }}>
            {user?.email || 'user@example.com'}
          </p>
        </div>

        <nav>
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              style={{
                width: '100%',
                backgroundColor: activePage === item.id ? '#495057' : 'transparent',
                color: 'white',
                border: 'none',
                padding: '15px 20px',
                textAlign: 'left',
                cursor: 'pointer',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => {
                if (activePage !== item.id) {
                  e.target.style.backgroundColor = '#495057';
                }
              }}
              onMouseLeave={(e) => {
                if (activePage !== item.id) {
                  e.target.style.backgroundColor = 'transparent';
                }
              }}
            >
              <span style={{ fontSize: '16px' }}>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          right: '20px'
        }}>
          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              padding: '12px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            🚪 Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        marginLeft: '250px',
        flex: 1,
        padding: '20px'
      }}>
        {/* Header */}
        <header style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          marginBottom: '30px'
        }}>
          <h1 style={{ margin: 0, color: '#333', fontSize: '24px' }}>
            {navigationItems.find(item => item.id === activePage)?.label || 'Dashboard'}
          </h1>
          <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '14px' }}>
            {activePage === 'dashboard' ? `Welcome back, ${user?.email || 'User'}!` : 'Manage your workspace'}
          </p>
        </header>

        {/* Page Content */}
        {renderPageContent()}
      </div>
    </div>
  );
}

export default Home;