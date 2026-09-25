import Header from '../components/Header';
import Footer from '../components/Footer';
import Projects from '../components/Projects';

export const metadata = {
  title: 'Semua Proyek | Portfolio',
  description: 'Daftar semua proyek yang pernah saya kerjakan',
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background/50">
      <Header />
      {/* Tambahkan padding top (pt-24) agar konten tidak tertutup Header yang fixed */}
      <main className="flex-1 pt-24">
        <Projects showViewAll={false} title="Semua Proyek Saya" />
      </main>
      <Footer />
    </div>
  );
}
