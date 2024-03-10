import Status from "./SetStatus";
const UserProfile = ({user, pics}) => {
    var day = user.favourite_pic
    return (
        <div id={'user_profile'} align={'center'}>
            <div className="page-content page-container" id="page-content">
                <div className="padding">
                    <div className="row container d-flex justify-content-center">
                        <div className="col-xl-6 col-md-12">
                            <div className="card user-card-full">
                                <div className="row m-l-0 m-r-0">
                                    <div className="col-sm-4 bg-c-lite-green user-profile">
                                        <div className="card-block text-center text-white">
                                            <div className="m-b-25">
                                                <img src="https://sun9-32.userapi.com/XOk3P0RklvA_QU-IR4oedfwSdQSgbXhMaEGqJQ/nBoJSaJJ6Mw.png"
                                                     className="img-radius" alt="User-Profile-Image"/>
                                            </div>
                                            <h6 className="f-w-600">{user.username}</h6>
                                            <p>Пользователь</p>
                                            <div id={'profile_buttons'} className={'m-lg-2'}>
                                                <button className={'btn btn-dark'}>Выйти</button>
                                            </div>
                                            <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="card-block">
                                            <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Информация</h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Email</p>
                                                    <h6 className="text-muted f-w-400">{user.email}</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Количество друзей</p>
                                                    <h6 className="text-muted f-w-400">{user.friends_count}</h6>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Любимая картинка</p>
                                                    <img width={100} height={100} src={pics[day].url}
                                                         alt={'not found'} title={pics[day].title}/>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">За сегодня отправлено картинок</p>
                                                    <h6 className="text-muted f-w-400">{user.sent_pics_for_today}</h6>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Статус</p>
                                                    <Status/>
                                                </div>
                                            </div>
                                            <ul className="social-link list-unstyled m-t-40 m-b-10">
                                                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title=""
                                                       data-original-title="facebook" data-abc="true"><i
                                                    className="mdi mdi-facebook feather icon-facebook facebook"
                                                    aria-hidden="true"></i></a></li>
                                                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title=""
                                                       data-original-title="twitter" data-abc="true"><i
                                                    className="mdi mdi-twitter feather icon-twitter twitter"
                                                    aria-hidden="true"></i></a></li>
                                                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title=""
                                                       data-original-title="instagram" data-abc="true"><i
                                                    className="mdi mdi-instagram feather icon-instagram instagram"
                                                    aria-hidden="true"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UserProfile;