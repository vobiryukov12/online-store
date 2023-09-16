import banner from '../../assets/images/banner.jpg';
import { BannerWrapper } from '../BannerWrapper';

export function Banner() {
  return (
    <BannerWrapper>
      <img src={banner} className="img-fluid" alt="К весне готовы!" />
      <h2 className="banner-header">К весне готовы!</h2>
    </BannerWrapper>
  );
}
