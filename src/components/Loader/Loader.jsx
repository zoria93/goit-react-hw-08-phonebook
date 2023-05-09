import { ThreeDots } from 'react-loader-spinner';
import { Spiner } from 'components/Loader/Loader.styled';

export const Loader = () => {
  return (
    <Spiner>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="blue"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Spiner>
  );
};
