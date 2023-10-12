import Link from 'next/link'

export const GNB = () => {
    return(
        <>
        <div className="gnb">
            <div className="logo">
                Interrupt </div>
            <div className="menu"> 
                <button> 내 이력서</button>
            </div>
            <div className="sign">
                <button>회원가입</button>
                <button> 로그인 </button>
            </div>
        </div>
        </>
    )
}