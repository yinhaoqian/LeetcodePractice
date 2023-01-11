/**
 * 镜面反射 → 建立二次镜像
 * 知识点：最大公倍数和最小公约数算法
 * 最大公倍数：Euclidian Algorithm
 * 最小公约数：两数之积/两数最大公倍数
 * 
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var mirrorReflection = function (p, q) {
	//通过欧几里得算法求最大公约数->背诵！
	let gcd_f = (a_n, b_n) => {
		if (b_n !== 0) { return gcd_f(b_n, a_n % b_n); }
		else return Math.abs(a_n);
	}

	//已知最小公约数求最小公倍数->背诵！
	let lcm_f = (a_n, b_n) => {
		return (a_n * b_n) / gcd_f(a_n, b_n);
	}
	//如果不是q的整数倍 那这个光线就还没到墙
	//如果不是p的整数倍 那这个光线只是碰墙 没有到角边界
	let lcm_n = lcm_f(p, q);
	//光线不可能重新回西南角，因为这样一定要先经过东北角

	//对于q来说，如果最终高度是q的单数倍，那么代表光线最后一次是从左边射到右边
	//	如果是q的双数倍，那么代表光线最后一次是从右边射到左边
	let parityQ_n = lcm_n / q % 2;
	//如果余数为0则为双数倍，余数为1则为单数倍

	//对于p来说，如果最终高度是p的单数倍，那么代表光线最后一次是从下边射到上边
	//	如果是p的双数被，那么代表光线最后一次是从上面射到下面
	//	因为在竖直建立延申镜像的时候，每延申一次则相当于做了上下翻转
	let parityP_n = lcm_n / p % 2;

	if (parityP_n === 0) {
		//如果光线最后一次是从上面射到下面 代表一定是射到东南角 （原因前面已经提到）
		return 0;
	} else {
		//反之，如果光线最后一次是下面射到上面，则有两种情况
		if(parityQ_n===0){
			//如果最后一次是从右面射到左面，则一定是射到了西北角
			return 2;
		} else{
			//反之，如果光线最后一次是左边射到右边，则一定射到了东北角
			return 1;
		}
	}

};
