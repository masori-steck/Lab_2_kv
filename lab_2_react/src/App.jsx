import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans py-10 px-4">
      
      {/* Головна обгортка резюме */}
      <div className="max-w-4xl mx-auto shadow-lg rounded-xl border border-zinc-200 p-8">
        
        <Header />
        
        <main className="mt-8 border-t border-zinc-100 pt-8">
          <Main />
        </main>
        
        <Footer />
        
      </div>

    </div>
  );
}

export default App;