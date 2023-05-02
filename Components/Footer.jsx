import { Fot1, Fot2} from "../Components/Index";
import style from './style.module.css'
export default () => {
    return (
      <footer className="pt-10 cursor-pointer w-full">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="mt-10 py-10 border-t md:text-center">
            <p className={style.navtext}><span className={style.items}> &copy;All Rights Reserved</span></p>
          </div>
        </div>
      </footer>
    );
};