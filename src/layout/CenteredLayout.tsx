import AppContent from '@/layout/AppContent';
import AppHeader from '@/layout/AppHeader';
import AppLayoutRoot from '@/layout/AppLayoutRoot';

type AppLayoutProps = React.PropsWithChildren;

export default function CenteredLayout({ children }: AppLayoutProps) {
  return (
    <AppLayoutRoot className="grid-rows-[1fr_auto]">
      <AppHeader />
      <AppContent className="grid place-items-center mb-12">
        {children}
      </AppContent>
    </AppLayoutRoot>
  );
}
