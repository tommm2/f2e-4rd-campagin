import { MouseEventHandler, } from 'react';

type Props = {
	className?: string
	onClick?: MouseEventHandler<SVGSVGElement>;
} & typeof defaultProps;

const defaultProps = {
	className: '',
	onClick: () => {},
};

function IcBubble1({
	className,
	onClick,
}: Props) {
	return (
		<svg className={className} onClick={onClick} width='561' height='244' viewBox='0 0 561 244' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g filter='url(#filter0_d_224_35002)'>
				<path fillRule='evenodd' clipRule='evenodd' d='M86.1218 34.5012C41.9898 34.9063 7.38107 72.5155 10.6383 116.529C13.4598 154.655 43.804 184.168 80.7806 187.055C79.1571 196.13 75.8564 206.836 73.011 216.065C71.3041 221.602 69.7611 226.607 68.8422 230.409C67.012 237.983 77.9627 228.467 93.4278 215.028C104.834 205.116 118.697 193.069 131.698 184.172L491.531 157.542C526.895 154.925 553.248 123.831 550.032 88.5171C547.037 55.6193 519.299 30.5249 486.266 30.8281L86.1218 34.5012Z' fill='#9DA4FF'/>
			</g>
			<path d='M44.7484 125.061C47.2171 125.477 50.1577 126.426 51.6985 127.417L52.9695 125.179C51.3888 124.19 48.373 123.325 45.9913 123.024L44.7484 125.061ZM55.777 120.446C54.2363 119.455 51.3285 118.383 49.0173 117.918L47.6899 119.879C50.0058 120.425 52.9206 121.616 54.3839 122.652L55.777 120.446ZM53.1877 127.53C51.1719 130.734 48.7733 134.24 47.0137 136.347L49.2778 138.057C51.2089 135.46 53.3773 132.127 55.13 129.219L53.1877 127.53ZM69.1208 122.508L75.6695 122.124C75.1337 123.918 74.4359 125.682 73.8673 126.917L76.3406 127.413C77.3086 125.473 78.373 122.446 79.2612 119.829L77.2342 119.427L76.762 119.575L62.5864 120.407C63.0047 119.341 63.3806 118.237 63.6767 117.138L61.2081 116.722L79.7362 115.634L79.5979 113.278L63.7851 114.206L63.6281 111.531L76.0867 110.8L75.9578 108.604L63.4992 109.335L63.3492 106.779L77.7644 105.933L77.6284 103.617L69.6023 104.088C70.347 103.123 71.1223 101.996 71.8177 100.873L68.6139 100.219C68.1205 101.37 67.2159 103.026 66.4078 104.276L57.1836 104.817C56.5942 103.65 55.3871 102.198 54.201 101.105L51.6993 102.174C52.5096 103.008 53.3316 104.041 53.9891 105.005L46.0029 105.473L46.1388 107.789L60.3544 106.955L60.5044 109.511L48.2854 110.228L48.4143 112.424L60.6333 111.707L60.7903 114.382L45.2171 115.296L45.3554 117.652L60.8088 116.745C59.8241 120.449 57.9516 124.045 55.532 126.511C56.1943 126.873 57.4791 127.599 58.0263 128.048C59.2667 126.653 60.446 124.9 61.414 122.96L66.046 122.689L66.1492 124.445C66.257 126.282 65.2063 132.274 55.0094 135.357C55.5637 135.925 56.4256 136.957 56.7802 137.537C64.6845 134.989 67.4098 130.222 67.9081 127.788C68.7698 130.182 72.0342 134.598 80.1799 136.163C80.4642 135.546 81.1949 134.341 81.6765 133.672C71.0715 131.85 69.327 126.022 69.2215 124.225L69.1208 122.508ZM106.994 104.899L109.909 104.727L109.794 102.771L119.298 102.213L119.157 99.8171L109.653 100.375L109.508 97.8992L106.593 98.0703L106.739 100.546L102.386 100.802L102.527 103.197L106.879 102.942L106.994 104.899ZM93.7767 105.674L96.6917 105.503L96.5769 103.547L101.249 103.272L101.108 100.877L96.4362 101.151L96.2909 98.675L93.3759 98.8461L93.5213 101.322L84.2572 101.866L84.3978 104.262L93.6619 103.718L93.7767 105.674ZM94.4624 125.548C93.6189 128.242 91.979 131.023 89.3527 132.7L91.5276 134.255C94.377 132.285 95.8807 129.232 96.7924 126.333L94.4624 125.548ZM99.7349 132.091C99.7583 132.49 99.6455 132.617 99.1687 132.685C98.7694 132.708 97.252 132.797 95.6125 132.854C96.014 133.551 96.4696 134.486 96.6316 135.198C98.9077 135.064 100.385 134.977 101.32 134.522C102.293 134.024 102.535 133.369 102.455 132.011L101.895 122.468L99.1794 122.627L99.7349 132.091ZM102.965 126.372C104.325 128.375 105.689 131.14 106.152 132.876L108.416 131.862C107.916 130.168 106.479 127.528 105.119 125.524L102.965 126.372ZM107.863 125.162C110.517 127.371 113.546 130.519 114.913 132.642L117.229 131.144C115.783 129.025 112.72 125.999 110.071 123.871L107.863 125.162ZM92.3994 112.928L112.245 111.763L112.398 114.358L92.5517 115.523L92.3994 112.928ZM92.1392 108.495L111.985 107.33L112.133 109.846L92.2869 111.011L92.1392 108.495ZM120.569 120.45L120.428 118.054L98.905 119.317C99.342 118.57 99.7014 117.868 100.016 117.088L115.35 116.188L114.701 105.127L89.2644 106.62L89.9137 117.681L96.7818 117.278C96.4247 118.02 96.0277 118.765 95.5507 119.514L85.0089 120.133L85.1495 122.529L93.5351 122.037C91.4584 124.202 88.5714 126.215 84.8177 127.797C85.4823 128.199 86.3771 129.108 86.8163 129.764C91.4979 127.606 94.9018 124.841 97.2487 121.819L107.83 121.198C110.811 124.188 115.454 126.841 119.609 127.999C119.969 127.297 120.751 126.289 121.277 125.697C117.745 124.903 113.874 123.127 111.145 121.003L120.569 120.45ZM128.379 101.279L138.521 100.684L138.971 108.351L128.829 108.946L128.379 101.279ZM133.347 115.613C133.422 114.166 133.458 112.721 133.456 111.319L141.921 110.822L141.159 97.8445L125.466 98.7656L126.228 111.743L130.581 111.488C130.606 118.739 130.125 126.941 124.948 131.572C125.692 131.969 126.667 132.874 127.104 133.489C131.093 129.769 132.646 124.149 133.185 118.307L139.733 117.923C139.836 125.81 139.615 128.868 138.943 129.709C138.604 130.09 138.29 130.188 137.611 130.228C136.892 130.27 135.015 130.38 133.047 130.296C133.566 130.946 133.911 132.048 134.038 132.842C135.959 132.809 137.918 132.734 138.909 132.556C140.103 132.406 140.767 132.126 141.399 131.288C142.405 129.987 142.591 126.33 142.486 116.359C142.465 115.999 142.451 115.078 142.451 115.078L133.347 115.613ZM148.281 100.392L145.406 100.56L146.695 122.523L149.57 122.354L148.281 100.392ZM154.875 95.9977L156.738 127.743C156.783 128.502 156.477 128.76 155.758 128.802C155.002 128.887 152.489 129.074 149.687 129.119C150.215 129.929 150.734 131.261 150.94 132.05C154.574 131.837 156.808 131.666 158.098 131.109C159.305 130.517 159.81 129.566 159.693 127.57L157.83 95.8242L154.875 95.9977ZM179.674 93.9009C179.911 99.9775 181.29 119.37 165.21 128.728C166.166 129.313 167.176 130.136 167.742 130.904C177.181 125.141 180.888 115.948 182.256 107.854C184.609 115.168 189.461 124.781 199.718 128.867C200.108 128.002 200.928 126.952 201.726 126.224C187.263 120.782 183.887 104.232 183.009 99.5152C183.071 97.1475 182.993 95.1486 182.949 93.7087L179.674 93.9009ZM217.024 109.018L208.639 109.511L208.149 101.165L216.535 100.673L217.024 109.018ZM209.356 121.73L208.794 112.146L217.179 111.654L217.742 121.237L209.356 121.73ZM210.967 91.8238C210.797 93.7169 210.235 96.4345 209.749 98.3864L205.277 98.6489L206.983 127.719L209.698 127.559L209.513 124.405L220.614 123.753L219.093 97.8379L212.464 98.227C213.042 96.4701 213.632 94.2317 214.196 92.2352L210.967 91.8238ZM238.612 96.572L226.673 97.2728C227.241 95.3562 227.688 93.4067 228.052 91.4219L225.177 90.9095C224.221 96.4551 222.388 102.092 219.919 105.763C220.581 106.125 221.906 106.849 222.453 107.297C223.74 105.338 224.835 102.83 225.796 100.089L235.939 99.4937C236.353 115.417 236.11 121.521 234.874 122.996C234.505 123.539 234.071 123.645 233.272 123.691C232.354 123.745 229.958 123.886 227.348 123.799C227.957 124.605 228.386 125.781 228.518 126.655C230.761 126.644 233.042 126.59 234.43 126.348C235.78 126.149 236.678 125.735 237.491 124.566C238.973 122.515 239.131 116.336 238.701 98.0894L238.612 96.572ZM233.358 114.911C231.942 112.63 228.961 108.959 226.559 106.255L224.323 107.749C226.688 110.495 229.595 114.291 230.934 116.616L233.358 114.911ZM249.499 116.849L256.846 116.418L256.708 114.062L249.361 114.493L249.499 116.849ZM253.21 98.8405L250.894 98.9765L250.594 93.8653L252.91 93.7293L253.21 98.8405ZM257.949 107.898C257.872 107.943 257.712 107.952 257.353 107.973L255.875 108.06C255.396 108.088 255.354 108.051 255.323 107.532L254.958 101.302L257.553 101.15L257.949 107.898ZM248.096 120.938L247.534 111.355C247.949 111.611 248.415 112.024 248.671 112.29C251.017 109.948 251.401 106.92 251.26 104.525L251.084 101.53L253.28 101.401L253.648 107.67C253.759 109.547 254.261 109.918 255.818 109.827L257.775 109.712L258.055 109.695L258.678 120.317L248.096 120.938ZM249.447 101.626L249.623 104.621C249.738 106.577 249.519 108.994 247.515 111.035L246.971 101.771L249.447 101.626ZM243.486 94.2825L248.478 93.9895L248.778 99.1007L244.505 99.3515L246.09 126.345L248.406 126.209L248.239 123.374L258.821 122.753L258.955 125.029L261.311 124.891L259.759 98.4561L255.367 98.7139L255.067 93.6027L259.898 93.3191L259.748 90.7635L243.336 91.7268L243.486 94.2825ZM276.838 112.279L277.288 119.946L266.667 120.569L266.217 112.903L276.838 112.279ZM264.179 125.283L266.934 125.122L266.826 123.285L277.448 122.661L277.551 124.418L280.426 124.249L279.554 109.395L263.302 110.349L264.179 125.283ZM272.886 103.656L272.518 97.3866L279.227 96.9929L279.07 94.3175L272.361 94.7113L271.989 88.3622L269.193 88.5262L269.566 94.8753L265.932 95.0886C266.205 93.5901 266.435 92.0539 266.623 90.4802L263.842 90.2027C263.48 94.2709 262.568 98.5316 261.093 101.383C261.788 101.623 263.063 102.189 263.646 102.555C264.25 101.238 264.835 99.6007 265.291 97.8109L269.723 97.5507L270.091 103.82L261.586 104.319L261.743 106.995L280.67 105.884L280.513 103.208L272.886 103.656ZM289.43 114.505L296.778 114.074L296.639 111.718L289.292 112.149L289.43 114.505ZM293.142 96.4967L290.826 96.6326L290.526 91.5214L292.842 91.3855L293.142 96.4967ZM297.88 105.555C297.803 105.599 297.643 105.609 297.284 105.63L295.806 105.716C295.327 105.745 295.285 105.707 295.254 105.188L294.889 98.9585L297.484 98.8062L297.88 105.555ZM288.028 118.594L287.465 109.011C287.881 109.267 288.346 109.68 288.602 109.946C290.949 107.604 291.332 104.577 291.191 102.181L291.015 99.1859L293.212 99.057L293.58 105.326C293.69 107.203 294.192 107.574 295.75 107.483L297.706 107.368L297.986 107.351L298.609 117.973L288.028 118.594ZM289.378 99.282L289.554 102.277C289.669 104.233 289.45 106.65 287.446 108.691L286.903 99.4273L289.378 99.282ZM283.418 91.9386L288.409 91.6456L288.709 96.7568L284.437 97.0076L286.021 124.001L288.337 123.865L288.171 121.03L298.752 120.409L298.886 122.685L301.242 122.547L299.69 96.1123L295.298 96.3701L294.998 91.2589L299.829 90.9753L299.679 88.4197L283.268 89.383L283.418 91.9386ZM316.77 109.935L317.22 117.602L306.598 118.226L306.148 110.559L316.77 109.935ZM304.11 122.939L306.865 122.778L306.757 120.941L317.379 120.317L317.482 122.074L320.357 121.906L319.485 107.051L303.233 108.005L304.11 122.939ZM312.817 101.312L312.45 95.0428L319.158 94.6491L319.001 91.9737L312.292 92.3674L311.92 86.0184L309.125 86.1824L309.497 92.5315L305.864 92.7448C306.136 91.2462 306.367 89.7101 306.555 88.1364L303.774 87.8588C303.411 91.9271 302.5 96.1878 301.024 99.0392C301.719 99.2788 302.995 99.8451 303.577 100.212C304.181 98.8939 304.766 97.2568 305.222 95.4671L309.654 95.2069L310.022 101.476L301.517 101.975L301.674 104.651L320.601 103.54L320.444 100.864L312.817 101.312ZM326.156 110.787C325.944 114.005 325.551 117.554 324.818 120.081C325.386 120.208 326.565 120.499 327.061 120.751C327.714 118.228 328.257 114.51 328.453 111.013L326.156 110.787ZM330.283 110.785C330.881 113.474 331.524 116.923 331.743 119.274L333.946 118.584C333.69 116.275 333.049 112.866 332.336 110.264L330.283 110.785ZM334.551 109.773C335.572 112.157 336.718 115.296 337.241 117.389L339.273 116.508C338.755 114.495 337.531 111.401 336.467 108.979L334.551 109.773ZM333.654 100.65C334.162 101.782 334.756 103.029 335.27 104.282L328.458 105.643C331.39 101.664 334.186 96.7321 336.425 91.8725L334.027 90.6109C333.298 92.5369 332.333 94.5168 331.435 96.2925L327.266 96.9379C329.284 93.7742 331.211 89.7344 332.667 85.8824L330.089 84.9519C328.784 89.3559 326.336 94.0674 325.568 95.3146C324.84 96.5594 324.21 97.4378 323.581 97.635C323.9 98.2975 324.377 99.5918 324.569 100.141C325.072 99.8314 325.899 99.5826 330.023 98.8596C328.755 101.138 327.618 102.928 327.023 103.724C325.954 105.309 325.134 106.359 324.345 106.566C324.707 107.266 325.221 108.518 325.336 109.112C326.071 108.668 327.253 108.318 336.075 106.398C336.275 107.067 336.515 107.735 336.667 108.287L338.852 107.277C338.26 105.388 336.915 102.262 335.729 99.8069L333.654 100.65ZM348.616 110.47C347.777 110.519 347.639 110.207 347.578 109.169L347.348 105.255L355.574 104.773L355.435 102.417L349.526 102.764L350.926 102.04C350.515 101.183 349.705 99.6678 348.958 98.5496L355.666 98.1559L355.528 95.7999L352.134 95.9991C352.672 94.2446 353.257 91.9263 353.741 89.9345L351.547 89.4222C351.3 91.36 350.666 94.2021 350.057 96.121L342.47 96.5663L342.609 98.9223L348.718 98.5637L346.923 99.3903C347.543 100.396 348.264 101.756 348.687 102.813L343.256 103.132L343.395 105.488L344.872 105.401L345.1 109.274C345.254 111.91 345.909 112.833 348.545 112.678L353.656 112.378C354.654 112.319 355.69 112.219 356.2 112.028C356.085 111.434 355.951 110.52 355.831 109.846C355.242 110.041 354.126 110.147 353.487 110.184L348.616 110.47ZM343.474 90.457C344.536 92.1578 345.515 94.5044 345.886 96.0453L347.763 95.254C347.432 93.7107 346.375 91.4087 345.273 89.7103L343.474 90.457ZM358.47 85.1693L338.145 86.3623L340.177 120.983L342.853 120.826L340.975 88.8407L355.909 87.9641L357.588 116.555C357.62 117.114 357.47 117.283 356.953 117.353C356.474 117.382 354.879 117.515 353.197 117.534C353.559 118.234 353.989 119.411 354.111 120.125C356.547 119.982 358.181 119.846 359.112 119.31C360.122 118.77 360.399 118.033 360.303 116.396L358.47 85.1693ZM392.147 95.7341L372.101 96.9107L371.888 93.2769L391.934 92.1003L392.147 95.7341ZM392.494 101.644L372.448 102.821L372.233 99.1468L392.278 97.9702L392.494 101.644ZM392.843 107.594L372.798 108.77L372.582 105.097L392.627 103.92L392.843 107.594ZM368.715 91.0991L369.903 111.344L396.138 109.804L394.95 89.5592L381.972 90.321C382.306 89.1795 382.63 87.8782 382.917 86.6193L397.771 85.7474L397.612 83.032L364.509 84.9751L364.668 87.6904L379.523 86.8185C379.394 88.0281 379.151 89.3646 378.898 90.5014L368.715 91.0991ZM377.157 111.359C374.509 113.358 369.201 115.753 364.994 117.122C365.71 117.721 366.649 118.708 367.166 119.318C371.368 117.87 376.595 115.439 379.947 113.159L377.157 111.359ZM385.749 113.019C390.514 114.342 395.348 116.142 398.275 117.532L400.911 115.334C397.704 113.96 392.514 112.221 387.75 110.938L385.749 113.019ZM407.651 101.836L407.48 98.9211L412.511 98.6258L412.682 101.541L407.651 101.836ZM407.196 94.0894L412.228 93.7941L412.397 96.6692L407.365 96.9645L407.196 94.0894ZM420.134 93.33L420.303 96.2051L415.072 96.5121L414.903 93.6371L420.134 93.33ZM420.589 101.077L415.358 101.384L415.187 98.4687L420.418 98.1617L420.589 101.077ZM430.378 88.3212C430.294 85.5213 430.121 82.5664 429.945 79.5715L427.15 79.7356C427.328 82.7704 427.499 85.6853 427.583 88.4852L422.831 88.7641L422.995 91.5593L427.667 91.2851C427.749 98.8133 427.088 105.303 423.89 110.219L423.879 110.019C421.222 110.496 418.523 110.935 415.941 111.327L415.756 108.172L423.583 107.713L423.449 105.437L415.623 105.896L415.48 103.46L423.226 103.005L422.53 91.1459L414.784 91.6006L414.636 89.0849L423.101 88.588L422.965 86.272L414.5 86.7689L414.329 83.8539C417.225 83.3634 419.919 82.8446 422.048 82.2388L420.437 80.0495C416.378 81.2093 409.232 82.35 403.341 83.0163C403.696 83.5965 404.031 84.5385 404.189 85.1703C406.54 84.9522 409.126 84.6401 411.67 84.2905L411.825 86.9259L403.199 87.4322L403.335 89.7482L411.961 89.2419L412.108 91.7576L404.641 92.1959L405.337 104.055L412.804 103.617L412.947 106.053L405.4 106.496L405.534 108.772L413.081 108.329L413.283 111.763C410.027 112.275 407.048 112.73 404.664 113.07L405.256 115.64C409.7 114.898 415.85 113.856 421.877 112.781C421.346 113.293 420.815 113.805 420.202 114.282C420.949 114.719 422.046 115.656 422.522 116.269C429.241 110.586 430.567 101.773 430.423 91.1234L436.133 90.7882C436.584 105.307 436.414 110.606 435.564 111.818C435.195 112.36 434.843 112.501 434.164 112.541C433.405 112.585 431.646 112.649 429.72 112.601C430.204 113.334 430.596 114.553 430.722 115.347C432.566 115.359 434.445 115.289 435.554 115.064C436.745 114.874 437.525 114.507 438.143 113.429C439.402 111.673 439.436 106.101 438.893 89.344C438.869 88.9447 438.844 87.8243 438.844 87.8243L430.378 88.3212ZM445.166 113.618L480.785 111.527L480.66 109.411L445.042 111.502L445.166 113.618ZM472.879 102.455L463.615 102.999L463.496 100.962L472.76 100.419L472.879 102.455ZM473.102 106.249L463.838 106.792L463.714 104.676L472.978 104.132L473.102 106.249ZM452.094 105.358L460.959 104.838L461.083 106.954L452.218 107.474L452.094 105.358ZM451.876 101.644L460.741 101.124L460.86 103.161L451.995 103.681L451.876 101.644ZM448.94 100.094L449.484 109.358L476.198 107.79L475.654 98.5257L448.94 100.094ZM462.662 85.3844L471.806 84.8477L471.935 87.0439L462.791 87.5807L462.662 85.3844ZM462.432 81.4712L471.576 80.9344L471.696 82.9709L462.552 83.5077L462.432 81.4712ZM463.25 95.4072L463.128 93.3308L476.785 92.5292L476.674 90.6524L463.018 91.454L462.898 89.4175L474.998 88.7073L474.761 84.6743L479.073 84.4211L478.963 82.5444L474.651 82.7975L474.423 78.9242L462.324 79.6343L462.179 77.1586L459.224 77.332L459.369 79.8078L447.51 80.5039L447.617 82.3407L459.477 81.6446L459.597 83.6811L443.544 84.6233L443.654 86.5001L459.707 85.5579L459.836 87.7541L447.736 88.4643L447.844 90.3011L459.943 89.5909L460.063 91.6274L447.005 92.3939L447.116 94.2706L460.173 93.5042L460.295 95.5806L444.163 96.5275L444.285 98.604L479.903 96.5133L479.782 94.4368L463.25 95.4072ZM499.991 98.7801L503.265 98.5879C501.835 92.6615 511.306 90.8635 510.952 84.8339C510.683 80.2418 506.92 77.5777 501.29 77.9081C496.937 78.1636 493.931 80.1833 491.459 83.1332L493.733 85.0032C495.826 82.4361 498.351 81.0858 501.066 80.9264C505.139 80.6874 507.253 82.5667 507.415 85.322C507.682 89.8742 498.364 92.2242 499.991 98.7801ZM498.867 105.578C498.98 107.494 500.53 108.646 502.287 108.542C504.044 108.439 505.409 107.117 505.296 105.2C505.184 103.284 503.676 102.17 501.919 102.273C500.162 102.376 498.755 103.661 498.867 105.578Z' fill='#06102B'/>
			<defs>
				<filter id='filter0_d_224_35002' x='0.425781' y='20.8254' width='559.872' height='222.267' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
					<feFlood floodOpacity='0' result='BackgroundImageFix'/>
					<feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/>
					<feOffset/>
					<feGaussianBlur stdDeviation='5'/>
					<feComposite in2='hardAlpha' operator='out'/>
					<feColorMatrix type='matrix' values='0 0 0 0 0.615686 0 0 0 0 0.643137 0 0 0 0 1 0 0 0 0.6 0'/>
					<feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_224_35002'/>
					<feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_224_35002' result='shape'/>
				</filter>
			</defs>
		</svg>
	);
}

IcBubble1.defaultProps = defaultProps;

export default IcBubble1;

