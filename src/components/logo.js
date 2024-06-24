import { jsx, Image } from 'theme-ui';
import { NormalLink } from './link';
import siteImages from '../resource/images';
export default function Logo({ white }) {
  return (
    <NormalLink
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      <Image className="rounded-image" src={siteImages.logo.src} alt="startup landing logo" />
    </NormalLink>
  );
}
