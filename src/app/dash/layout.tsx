import { SlideProvider } from '../components/slidecontext';

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <SlideProvider>
        <section>
          {children}
        </section>
      </SlideProvider>
    )
  }