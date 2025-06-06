import { getMusicUrl } from 'utils';

type Obj = {
  [key: string]: unknown;
};

type MusicTypes = {
  recently: Obj;
  currently: Obj;
};

type Content = MusicTypes & {
  type: keyof MusicTypes;
};

type Styles = {
  align: 'left' | 'center' | 'right';
};

type MusicSectionProps = {
  id: string;
  content: Content;
  styles: Styles;
};

const ALTS = {
  recently: 'Spotify recently played',
  currently: 'Widget with the current Spotify song',
};

export function MusicSection(props: MusicSectionProps) {
  const { content, styles } = props;
  const { type, ...rest } = content;

  const { spotifyAccountUrl, imageUrl } = getMusicUrl(type, rest[type]);
  const alt = ALTS[type];

  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    spotifyAccountUrl ? (
      <a href={spotifyAccountUrl}>{children}</a>
    ) : (
      <>{children}</>
    );

  return (
    <div className="flex gap-sm" style={{ justifyContent: styles.align }}>
      <Wrapper>
        <img src={imageUrl} alt={alt} className="max-w-full" />
      </Wrapper>
    </div>
  );
}
