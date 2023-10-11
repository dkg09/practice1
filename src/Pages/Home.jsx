import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

    const jobListings = [
        {
            title: "Product Designer",
            company: "Adidas",
            location: "New York, New York",
            type: "Part Time",
            src: "data:image/webp;base64,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"

        },
        {
            title: "Digital Marketing Director",
            company: "Sprint",
            location: "Overland Park, Kansas",
            type: "Full Time",
            src: "data:image/webp;base64,UklGRgwFAABXRUJQVlA4IAAFAABQHQCdASqWAJYAPm00l0kkIqIhI/QI0IANiWVu4XB4OZ72OIHcHKXOA8TPpAeYD9kOpz6AHSH+gB5Yv7gfA/+2/7D+z1/870BrXfovyYyqP4Dhx2pt7Kyf/gNI94+kyL8++lH6P/Xz4DRMAzVQ+hlrZgEofQy1swCUKo6d2OSFLQuFjfTR4oq4XdDrShLmGP93A7YVFjaP+jnzYVCyfHv2VWlRQk9TP7Ul+UkTLbnhiyHIcH7pZB9zsl7iG81fqMpAFJaE20CFbq4R8vzmaDpfqFoWfwgRsPajUvh123rrSJalvmdrZgEofQy1swCUPoZa2RAA/v85wAyFGmlsmc3goHQncd/plTwLAY50lYkaDSb9R2RahwbFX+QHThFjZe/j4bhYrkyo18OXZ0w0f8x/FKyLTAiBKLFyTwokWJW9E+rC2gcP6yiQgFaVUQoxXaQwM8+uFaetTUgTkKVB2/pczwS58It3IdGfmFdm/qsfpgiFeTJlNFL/TBfC7ka0X4mYg6cP+jbhq2PPcTIXTdM9RfPhZY5LoQ1mlMy9yYlbKpclgcLUg8dYd2RDc4JRc65U8TZsDX5ugr5UDiR8bpjwAXY6+XXMGcvVlH+nq3F+7eeFcR8yqMfl6u64j3VSL3J9++pRTs1HOdzl+XTy35RY462EW0Ml+KjL9wtn/yWNt21z7FTPK1LMuKWYOhR0zQwie202O/aeQUJ/ieliZENkTsLWwTzWirnFOTzn6DeSzYeGSR+eKjK/GqzaaRhXVaZ+NWDPY3kVyWwHcvkjz3YedevYW2YzCytFmcjIPTidC/1Ge3+K3ZRqiz39JWLwSsBxDML3TTMDP1ClbtQvOj+15//wd8aydDag2K/tU+b3mUOEi0NfPY3EeRTG9ESt/enMUs26aP/9RHpV5df/X+B+P0D6tzN7Mbpqhsd7DOcdUVK++eO5qolyejrX9hR0lL3UnMlHDK8o/jSjFwVP2itWdqlcm7cQZ8DACdlcUTAoQ6CeTOnOG5/w1cZc8BdXEt//JWhhgt2Bipkx2qGODmCwWO47e1/x5ScKViRV/29jDa76e0U6mBxrn7hj3fficde76dRfrAcKZs4N4QuO+86dDLJuR9a3/QTpe19wSmzOQjUtDR6e2tagAIxCmtDBF6FuoThQFTeS/fef9sfq/0lPlcPTqLt1K+LBCFZHnO+y5vZXDblmD/VfdtPYesuZa9/aoLSckbUgyB9hmdBvYLULl8TpgSjxr1N/rzK4/hiiOlzT/Wf1fX+4+4FxIgTX+vrKSNbJCyyY6szgA/ZPlMzVX7qNYrxwC/rlyJ+Rrs4ye6yI+a4Jf+1XsmCZ7MMxAfs9/utfSytt13K73SsJVaObBJj/nMcuB9TCwrbefmtBPJITB6pFKxojIYl8II1lX9T6C/QqNBEp4a493OM1Tb7y5epjbs5zeBNqtVLlM+TqM5YkSigFURomlzYuP6BZuU7h7jf6Z14U56WH7efr2B/S6c7QLu+54F4gvOFjBfOL8Gft3uuS3Ha//NkG7uUXsExHbdEPUyEzFgMV9nf3AkWpnpLnCAgP0dmTqAww/9JosP/xR5VXS+q8zM5HetjVePf/aPpv7U5UQQaeBBeDDf8hbGJWcAWljWZkOuH+IgEFLPk8zRzFQ/8LokMMqBEF+N9O5EPIM9BHszJqtkDi58G/SCN+V/1BdNBhNfYAAAAAAA=="
        },
        {
            title: "Back-end Engineer (Python)",
            company: "Amazon",
            location: "Overland Park, Kansas",
            type: "Full Time",
            src: "data:image/webp;base64,UklGRhoFAABXRUJQVlA4IA4FAABwHQCdASqWAJYAPm00lUkkIqGhI1gI0IANiWdu4XB1jAwwH6x9QDzwOoA9ADpOf2+/YD2i9XAYb/ifCHv9+WPabQA+sH6LzA/xXgD8Acnf+A/JjgCeV/0n/XeB1qU3n/EbyE+gr8/ehL6d9hP9cOtv6NYnfuXf/OtRPPGLL59wXuC9v7S4PsdhaK4ZXjXmxcShJX87i81B7HeIz/XW/XvXt+MesLCQ1B4lt/yOgbz8bPazg9i47M+tZoFvTho2KrJYYogmy3pPJvDgae3s1YzwvkkQsnRdX/0MJOHooHV5mMW7LOHBe4L3Be4L3Be4L3Be4LwAAP7/TQAAjWNv+8Qbt/3DEgbUJnjMdfn9DRcx3R8i2DGJVnhSpgugTp6XK6S6fxXwd5IKgeWA029sQvnPh9I2yEbFRKXdZh2Cy/UBD8v52dZGhIJRuQuN6HVkWIhwQeAZ01J9HKzY9xDxuPqHHDOvfgMIsVXY1Dhniqw04N0HqqU9h7iKxtKF+Jg3glFpl5AW4L14nebkE2M6yPtTHfj0kI7K4uIhd00X7dGOPkloZDEjR+t/f7u8B57RZFVNu0nYOpqt+LyEH6WiE+4Y3eIneIAWtH0DvXNkfZPnzIM+bCvd42wJqaXf3mv9gLmUAopE5NfOyIhIgoGYUMq/wo/8fNr+o09oP7v50Vy8x5604EOpMZEdBra6I+jfI/L6BspUAdC/4uOkPvmO1Mj3fLlnQtALOKBfvet/RtzW/Jb0e15VSgZbKH9t61/kQCnSIh3H4JE2X/GUcn3xL9mzDn7/nypR6X7/tboOy1zi9rY+RuXaoxAvcVMpjgQXS4TVajaLEOKIUa/jQVBl0bKf65dBBHtPgXD2kasBGWPrWWGkyArWX/OfdhBXcCJ3S2BvLr7IMtT6mEpP2ZT+AmXq5C7xcPagJkbRl1myjqUcBY81FjcQ7zU+Dr+f7S7NW2XUF12I7TQrgxkmtgQ4S7uxs7KYqehOq3ivWcgT8fHK/Vm66mEpeYsfYQhX3FJ9l9gZG5OJaOP5dLfUNScGwCREsS5WaIz04oTkeMwi+a6tVoyXVvIBxyDRiRAvEiC++6DhhIOjHpDCQP4s07lu/O+tnsaa703+8Pi1wfxGIuyVHpL1F4Kb8ilpHz5XS/5xDftq7P8Retwy1XuEgYMc5jQOPS3z3ZBoFaHwsEx7GRVV9WZI9zBuA7k99VGyNwD8lQQPzkPBCVcGR5TNh78SUvdeT1HHFSqyu64/Uek4B/znwvlIY+prdjL8RkOMJimI/rsBiF5LMnuxLVkhaW/+L7id/TtqSjAzBnGTY7pjwk30UILP7kD6p6TRehYnuj/USVpmw9Nk0Ag+vwVvx99iPSpIIqrCQ3VbNYHJJKyO6Y+lGtM7hPx8gF4MEvz/40vt/GzqPztyn9EmMcqw/vKr8/++DTUhzz3Ns206XGdlpKQiAh7FeZw7EoKn81JPWMuLxYLHXLaGfnNI+z8DLz1FtOC9XyzOtao6MdRlTT1gryFKW77Gm8jX6sm+2rPCAoOeskHmXJczWX+8czc1vyAOjo09bPgS+HrlhtQhVf7TvjRi7iMHn5mep/YO3H0safP7vtbxlmXuSH8QHx/1sb/bXexkqx38L/pT0SoUOxj9apoPMxRit2T4ZBp5fr4M2SsDlpvet4aKsk6knHCJYSDC+WDKonrWAO0bFR3j4Y3u6ADGtm7h3Gta04i8ogAAAAAA"
        },
        {
            title: "Senior Art Director",
            company: "Microsoft",
            location: "Anywhere",
            type: "Full Time",
            src: "data:image/webp;base64,UklGRnoDAABXRUJQVlA4IG4DAADQFgCdASqWAJYAPm02mUikIyKhJXS4MIANiWdu4XM5nH2Z/gBWMVgx+oHvAaZB+qvsAfqB1s3lK3OPlXj87Cw/lvC2WaZO4i9LdMt8s5nlyHFnfn2uWohxZ359rizhmcINTwKKVGw4GeXbwe4QQUjwuEWCzn2Cdp/2BCwJNQ2KmEuEdTHs3IXANWM/4dB4AchWeZsakfwcfyDgV2/kIv+gVjAWFAEwMtSWRaIK8Cil7izvz7XLUQ4s78+1y1ENMAD+/37AAFkf3q9K3QrwGCR+wT0qxi/X/uToPWKg0cTGyVml/6g/leCdv5LbiouE+RxAh36iUArXDBCSQKR/Nm4fxCY3kQ0VVsImsJ/9P4TxIQEXG0u2Siv58NmYCKvGVcwk+pIf/yI1Sl4f693eIcf/K7IshJp4SJ/1yI//OY8E7WbrD/xi+gHUN6MpY7qbmPGOzmMBnD2olPC6r8SZiAAfsGO6L5pX/VwcUzURr8wLi36SERxgaFcx/jfq5i5Tc+DTnj17IsWpfxfyOBwuHxN3apyswOAFbkgj9/8Gn2+9rrD+Rc8lekMnhBk6Wh4nNeVt9ZGRiv636sojqG1EfnmvPp33DZA30yK209+YHUPrr4kdkEpAOBLPlsP97yMCx/Y2078b84tmy5kP8GnhQq4/szUBeDU991oy8xsrJn4uSZv+ydUTv4N/rJl/DGDtQ2Mxx3fLSB9cgQJd2Nn5kJVg+Aqc2BMh/Tu2J6nCrTplljMNzrzFt1ddpUYXf+yc6szohP1RXvWdzEXZo6sbBVJNrSapaQi7atiLwi2TcOHKpdsF7j3Hl0beeDLfmG41DGOPUfbIWcOwuGVVUAFQnP8GG8C28t/idrIkjn5QQXRdD/M0uN/2GAuRbM7yFy64Nzhea640XuoHtb8i2mhtKCYKYrVsHsm4i7wF7y2AGwyq0207Hp6f59V4v//mUnvv1whnWQqP/lBs/FCPw1FBKX3/N/6fX8hIPH18J0RvpxaxGuPGGCNIAU4Rh8U/15HuD6hOTig8jVL5ms48zPKGDfsC8uB5UJ4fSBnF0dclV33j7dUa8bFVyvhiI8yC62tfffV+SIiWcy/1UdVT3QxzsKiGxckxNlG0KAPSTxKojhNFuryuKF2FQclD1F8TcOiWgRhB84qvcxcq1rAAAAAAAA=="

        },
        {
            title: "Product Designer",
            company: "Puma",
            location: "San Mateo, CA",
            type: "Full Time",
            src: "data:image/webp;base64,UklGRgoEAABXRUJQVlA4IP4DAABQGwCdASqWAJYAPm00mUgkIyKhJxUZCIANiWlu3QpoHyB/QO2P+68q2fH/bvyb5K9qz+6fkXw1eV++d/ivQDSv5APQq+ffRJ9Qejh1jCEli/IiIiIiIiIiIhoT2ko8bYmZ3DeWhGdf6IiDl5SB28Z6YBEmpTQJsczG+FWnWbq4PabqEeGmBqbeAgjk18yVxqLI4PnpDarL9jdrHtyPRLvzNAngHp/xheYq0nkWoouws8ZZiJcG3B8sp2SGb6kcTK25bcUHflKvRkAZiJmqB4ODbgUeqqqqqqqqqqqqqqqqqqpsAAD++/YAAFC0qRFQTjvNGsY70G4yr9WTeUcSpzJckth1MOZfw3ribXnJiRNB/nGzAakoVElJCKp5yB0QJkSkgAATkMO42pZyOcbRcvbb+7CuVR0SvJw8+Jdm6oJSH7VF9kAZxCvH3f8MQ30ClYf7xSBC4RcnoO6TtbbnLRhh03olK1qa+c/jYYwnWM9jY+OL9egLd4iwX1gk6/eBWtAqqtt1tpqWYr7qeBTfafrt6JWq6u/P3h6uq1dP2VZFUxew6MxJAoyRh6vwgY3SGRH23RtermAAovwLDV8kJfquTMt0zMpQgcxVIozusFfmnWyIKzvkqlgFbYSlv+JEvQnBX9SnsUwl5lLZnonrGk0W3Oxs1G4UMT3U0GEGDC45+eA0Q3P58C/UAINuUq5nhPWEj5rZHQRONoeIpnedzICir51/2jvcdGvHdeWIgVMDzy2Lpq+TMznXwB+w5yv2losKCWWt0FFHJA4QfxN3IuD3d7yKYDpsCW6pbNnyePWE2/mfl7Hv9ADa3Sxd5fX2Z15UVR22NI1Oydvd8YfRJbGVjaqRzl2H6tlVk/UvIGPF4+zXuM10ZITFjARXZIa+G1XPNNMlWVynpF5BSbvdWfC2VT9bUkG3/bfbofF+A2xZGTN0Y74Z/tOtrEVoZmnpVuz9PYu6LfSP76BgEZsYi88r4advitDUAmBBGCkHUw4dwcrer/JHitZ3+DzSuItcWv2R5pYXAeIN4ob4bXCvnXexQ+BpRXgjMESIE5DhkKbFtUF+/hzUFP4bDbWyteGNFhtJFwHBOSDbzUCplqV5eMjB2Cu2j7eii4Fb3yrWdlxp1gAkdzNG/pqQgVrEHvQRuebpfEsqHQv6IIypVDZwpL4P9Ob4/XoFFAd55o9ZLyOYQaZllwf0rCteQRjFaUh/YcrZh1dBrXz+DzuwLHLDCyvhdAqsCXO37bbK8d0uJwuTkkYu2M675cgDU24OMPN5i2OA51lskCPNlzIL7fkP6nXDB/Srzh8iUQuBaay+cuVTePW9W4iS/ahvDaEq3uctsz0fVTx91sAL3sAAAAAAAA=="
        },
        {
            title: "Product Designer",
            company: "Adidas",
            location: "New York, New York",
            type: "Part Time",
            src: "data:image/webp;base64,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"
        },
        {
            title: "Digital Marketing Director",
            company: "Sprint",
            location: "Overland Park, Kansas",
            type: "Full Time",
            src: "data:image/webp;base64,UklGRgwFAABXRUJQVlA4IAAFAABQHQCdASqWAJYAPm00l0kkIqIhI/QI0IANiWVu4XB4OZ72OIHcHKXOA8TPpAeYD9kOpz6AHSH+gB5Yv7gfA/+2/7D+z1/870BrXfovyYyqP4Dhx2pt7Kyf/gNI94+kyL8++lH6P/Xz4DRMAzVQ+hlrZgEofQy1swCUKo6d2OSFLQuFjfTR4oq4XdDrShLmGP93A7YVFjaP+jnzYVCyfHv2VWlRQk9TP7Ul+UkTLbnhiyHIcH7pZB9zsl7iG81fqMpAFJaE20CFbq4R8vzmaDpfqFoWfwgRsPajUvh123rrSJalvmdrZgEofQy1swCUPoZa2RAA/v85wAyFGmlsmc3goHQncd/plTwLAY50lYkaDSb9R2RahwbFX+QHThFjZe/j4bhYrkyo18OXZ0w0f8x/FKyLTAiBKLFyTwokWJW9E+rC2gcP6yiQgFaVUQoxXaQwM8+uFaetTUgTkKVB2/pczwS58It3IdGfmFdm/qsfpgiFeTJlNFL/TBfC7ka0X4mYg6cP+jbhq2PPcTIXTdM9RfPhZY5LoQ1mlMy9yYlbKpclgcLUg8dYd2RDc4JRc65U8TZsDX5ugr5UDiR8bpjwAXY6+XXMGcvVlH+nq3F+7eeFcR8yqMfl6u64j3VSL3J9++pRTs1HOdzl+XTy35RY462EW0Ml+KjL9wtn/yWNt21z7FTPK1LMuKWYOhR0zQwie202O/aeQUJ/ieliZENkTsLWwTzWirnFOTzn6DeSzYeGSR+eKjK/GqzaaRhXVaZ+NWDPY3kVyWwHcvkjz3YedevYW2YzCytFmcjIPTidC/1Ge3+K3ZRqiz39JWLwSsBxDML3TTMDP1ClbtQvOj+15//wd8aydDag2K/tU+b3mUOEi0NfPY3EeRTG9ESt/enMUs26aP/9RHpV5df/X+B+P0D6tzN7Mbpqhsd7DOcdUVK++eO5qolyejrX9hR0lL3UnMlHDK8o/jSjFwVP2itWdqlcm7cQZ8DACdlcUTAoQ6CeTOnOG5/w1cZc8BdXEt//JWhhgt2Bipkx2qGODmCwWO47e1/x5ScKViRV/29jDa76e0U6mBxrn7hj3fficde76dRfrAcKZs4N4QuO+86dDLJuR9a3/QTpe19wSmzOQjUtDR6e2tagAIxCmtDBF6FuoThQFTeS/fef9sfq/0lPlcPTqLt1K+LBCFZHnO+y5vZXDblmD/VfdtPYesuZa9/aoLSckbUgyB9hmdBvYLULl8TpgSjxr1N/rzK4/hiiOlzT/Wf1fX+4+4FxIgTX+vrKSNbJCyyY6szgA/ZPlMzVX7qNYrxwC/rlyJ+Rrs4ye6yI+a4Jf+1XsmCZ7MMxAfs9/utfSytt13K73SsJVaObBJj/nMcuB9TCwrbefmtBPJITB6pFKxojIYl8II1lX9T6C/QqNBEp4a493OM1Tb7y5epjbs5zeBNqtVLlM+TqM5YkSigFURomlzYuP6BZuU7h7jf6Z14U56WH7efr2B/S6c7QLu+54F4gvOFjBfOL8Gft3uuS3Ha//NkG7uUXsExHbdEPUyEzFgMV9nf3AkWpnpLnCAgP0dmTqAww/9JosP/xR5VXS+q8zM5HetjVePf/aPpv7U5UQQaeBBeDDf8hbGJWcAWljWZkOuH+IgEFLPk8zRzFQ/8LokMMqBEF+N9O5EPIM9BHszJqtkDi58G/SCN+V/1BdNBhNfYAAAAAAA=="
        },
    ];
    return (
        <>
            {/* <!-- ***** Main Banner Area Start ***** --> */}
            <div className="main-banner" id="top">
                <video autoPlay muted loop id="bg-video">
                    <source src="../assets/images/video.mp4" type="video/mp4" />
                </video>

                <div className="video-overlay header-text">
                    <div className="caption">
                        <h6>Lorem ipsum dolor sit amet</h6>
                        <h2>Find the perfect <em>Job</em></h2>
                        <div className="main-button">
                            <form method="post" className="search-jobs-form">
                                <div className="row mb-5">
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                                        <input type="text" className="form-control form-control-lg"
                                            placeholder="Job title, Company..." />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                                        <div className="dropdown bootstrap-select" style={{ width: "100%" }}>
                                            <select className="form-control" data-style="btn-white btn-lg" data-width="100%"
                                                data-live-search="true" title="Select Region" tabIndex="-98">
                                                <option>Select Region</option>
                                                <option>Anywhere</option>
                                                <option>San Francisco</option>
                                                <option>Palo Alto</option>
                                                <option>New York</option>
                                                <option>Manhattan</option>
                                                <option>Ontario</option>
                                                <option>Toronto</option>
                                                <option>Kansas</option>
                                                <option>Mountain View</option>
                                            </select>

                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                                        <div className="dropdown bootstrap-select" style={{ width: "100%" }}>
                                            <select className="form-control" data-style="btn-white btn-lg" data-width="100%"
                                                data-live-search="true" title="Select Job Type" tabIndex="-98">
                                                <option>Select Job Type</option>
                                                <option>Part Time</option>
                                                <option>Full Time</option>
                                            </select>

                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                                        <button type="submit"
                                            className="btn btn-primary btn-lg btn-block text-white btn-search"><span
                                                className=" mr-2"><i className="fa fa-search" aria-hidden="true"></i></span>Search Job</button>
                                    </div>
                                </div>

                            </form>
                            {/* <!-- <a href="contact.html">Contact Us</a> --> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ***** Main Banner Area End ***** --> */}


            {/* <!-- ***** Cars Starts ***** --> */}
            <section className="section" id="trainers">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-heading">
                                <h2>43,167 Job Listed</h2>
                            </div>
                        </div>
                    </div>
                    <ul className="job-listings mb-5">
                        {jobListings.map((job, index) => (
                            <li key={index} className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
                                <Link to="/job-single"></Link>
                                <div className="job-listing-logo">
                                    <img
                                        src={job.src}
                                        alt={job.title}
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                                    <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                                        <h2>{job.title}</h2>
                                        <strong>{job.company}</strong>
                                    </div>
                                    <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                                        <span className="icon-room"></span> {job.location}
                                    </div>
                                    <div className="job-listing-meta">
                                        <span className={`badge ${job.type === 'Full Time' ? 'badge-success' : 'badge-danger'}`}>
                                            {job.type}
                                        </span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <br />
                    <div className="row pagination-wrap">
                        <div className="col-md-6 text-center text-md-left mb-4 mb-md-0">
                            <span>Showing 1-7 Of 43,167 Jobs</span>
                        </div>
                        <div className="col-md-6 text-center text-md-right">
                            <div className="custom-pagination ml-auto">
                                <a href="#" className="prev">Prev</a>
                                <div className="d-inline-block">
                                    <a href="#" className="active">1</a>
                                    <a href="#">2</a>
                                    <a href="#">3</a>
                                    <a href="#">4</a>
                                </div>
                                <a href="#" className="next">Next</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ***** Cars Ends ***** --> */}



            <section className="section section-bg" id="schedule"
                style={{ backgroundImage: "url(assets/images/about-fullscreen-1-1920x700.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-heading dark-bg">
                                <h2>Read <em>About Us</em></h2>
                                <img src="assets/images/line-dec.png" alt="" />
                                <p>Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor,
                                    ultricies fermentum massa consequat eu.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cta-content text-center">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore deleniti voluptas enim!
                                    Provident consectetur id earum ducimus facilis, aspernatur hic, alias, harum rerum velit
                                    voluptas, voluptate enim! Eos, sunt, quidem.</p>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto nulla quo cum officia
                                    laboriosam. Amet tempore, aliquid quia eius commodi, doloremque omnis delectus laudantium
                                    dolor reiciendis non nulla! Doloremque maxime quo eum in culpa mollitia similique eius
                                    doloribus voluptatem facilis! Voluptatibus, eligendi, illum. Distinctio, non!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* <!-- ***** Blog Start ***** --> */}
            <section className="section" id="our-classNamees">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-heading">
                                <h2>Read our <em>Blog</em></h2>
                                <img src="assets/images/line-dec.png" alt="" />
                                <p>Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor,
                                    ultricies fermentum massa consequat eu.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row" id="tabs">
                        <div className="col-lg-4">
                            <ul>
                                <li><a href='#tabs-1'>Lorem ipsum dolor sit amet, consectetur adipisicing.</a></li>
                                <li><a href='#tabs-2'>Aspernatur excepturi magni, placeat rerum nobis magnam libero! Soluta.</a>
                                </li>
                                <li><a href='#tabs-3'>Sunt hic recusandae vitae explicabo quidem laudantium corrupti non
                                    adipisci nihil.</a></li>
                                <div className="main-rounded-button"><Link to="/blog">Read More</Link></div>
                            </ul>
                        </div>
                        <div className="col-lg-8">
                            <section className='tabs-content'>
                                <article id='tabs-1'>
                                    <img src="assets/images/blog-image-1-940x460.jpg" alt="" />
                                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing.</h4>

                                    <p><i className="fa fa-user"></i> John Doe &nbsp;|&nbsp; <i className="fa fa-calendar"></i>
                                        27.07.2020 10:10 &nbsp;|&nbsp; <i className="fa fa-comments"></i> 15 comments</p>

                                    <p>Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend
                                        hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem
                                        tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut,
                                        accumsan diam.</p>
                                    <div className="main-button">
                                        <Link to="/blog-details">Continue Reading</Link>
                                    </div>
                                </article>
                                <article id='tabs-2'>
                                    <img src="assets/images/blog-image-2-940x460.jpg" alt="" />
                                    <h4>Aspernatur excepturi magni, placeat rerum nobis magnam libero! Soluta.</h4>
                                    <p><i className="fa fa-user"></i> John Doe &nbsp;|&nbsp; <i className="fa fa-calendar"></i>
                                        27.07.2020 10:10 &nbsp;|&nbsp; <i className="fa fa-comments"></i> 15 comments</p>
                                    <p>Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac pulvinar quam tortor a
                                        velit. Praesent ultrices erat ante, in ultricies augue ultricies faucibus. Nam tellus
                                        nibh, ullamcorper at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci varius
                                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                    <div className="main-button">
                                        <Link to="/blog-details">Continue Reading</Link>
                                    </div>
                                </article>
                                <article id='tabs-3'>
                                    <img src="assets/images/blog-image-3-940x460.jpg" alt="" />
                                    <h4>Sunt hic recusandae vitae explicabo quidem laudantium corrupti non adipisci nihil.</h4>
                                    <p><i className="fa fa-user"></i> John Doe &nbsp;|&nbsp; <i className="fa fa-calendar"></i>
                                        27.07.2020 10:10 &nbsp;|&nbsp; <i className="fa fa-comments"></i> 15 comments</p>
                                    <p>Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id auctor neque posuere sit
                                        amet. Aliquam pharetra, augue vel cursus porta, nisi tortor vulputate sapien, id
                                        scelerisque felis magna id felis. Proin neque metus, pellentesque pharetra semper vel,
                                        accumsan a neque.</p>
                                    <div className="main-button">
                                        <Link to="/blog-details">Continue Reading</Link>
                                    </div>
                                </article>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ***** Blog End ***** --> */}



            {/* <!-- ***** Call to Action Start ***** --> */}
            <section className="section section-bg" id="call-to-action"
                style={{ backgroundImage: "url(../assets/images/banner-image-1-1920x500.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="cta-content">
                                <h2>Send us a <em>message</em></h2>
                                <p>Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula, sit amet dapibus
                                    odio augue eget libero. Morbi tempus mauris a nisi luctus imperdiet.</p>
                                <div className="main-button">
                                    <Link to="/contact">Contact us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ***** Call to Action End ***** --> */}


            {/* <!-- ***** Testimonials Item Start ***** --> */}
            <section className="section" id="features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-heading">
                                <h2>Read our <em>Testimonials</em></h2>
                                <img src="assets/images/line-dec.png" alt="waves" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem incidunt alias minima
                                    tenetur nemo necessitatibus?</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ul className="features-items">
                                <li className="feature-item">
                                    <div className="left-icon">
                                        <img src="assets/images/features-first-icon.png" alt="First One" />
                                    </div>
                                    <div className="right-content">
                                        <h4>John Doe</h4>
                                        <p><em>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta numquam maxime
                                            voluptatibus, impedit sed! Necessitatibus repellendus sed deleniti id et!"</em>
                                        </p>
                                    </div>
                                </li>
                                <li className="feature-item">
                                    <div className="left-icon">
                                        <img src="assets/images/features-first-icon.png" alt="second one" />
                                    </div>
                                    <div className="right-content">
                                        <h4>John Doe</h4>
                                        <p><em>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta numquam maxime
                                            voluptatibus, impedit sed! Necessitatibus repellendus sed deleniti id et!"</em>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul className="features-items">
                                <li className="feature-item">
                                    <div className="left-icon">
                                        <img src="assets/images/features-first-icon.png" alt="fourth muscle" />
                                    </div>
                                    <div className="right-content">
                                        <h4>John Doe</h4>
                                        <p><em>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta numquam maxime
                                            voluptatibus, impedit sed! Necessitatibus repellendus sed deleniti id et!"</em>
                                        </p>
                                    </div>
                                </li>
                                <li className="feature-item">
                                    <div className="left-icon">
                                        <img src="assets/images/features-first-icon.png" alt="training fifth" />
                                    </div>
                                    <div className="right-content">
                                        <h4>John Doe</h4>
                                        <p><em>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta numquam maxime
                                            voluptatibus, impedit sed! Necessitatibus repellendus sed deleniti id et!"</em>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <br />

                    <div className="main-button text-center">
                        <Link to="/">Read More</Link>
                    </div>
                </div>
            </section>
            {/* <!-- ***** Testimonials Item End ***** --> */}





        </>
    )
}

export default Home