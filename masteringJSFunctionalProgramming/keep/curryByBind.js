const curryByBind = fn =>
	fn.length === 0
		? fn()
		: p => curryByBind(fn.bind(null, p))