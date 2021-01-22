/*
	After excavating for weeks, you finally arrive at the burial
	chamber. The room is empty except for two large chests. On
	each is carved a message (strangely in English):

	If this chest is
	empty, then the
	other chest’s
	message is true.

	This chest is filled
	with treasure or the
	other chest contains
	deadly scorpions.

	You know exactly one of these messages is true. What should
	you do?
*/

/*
	Solution:
	chest1:
		chest1.p1: It is empty;
		chest1.p2: The other chest is true.

	chest2:
		chest2.p1: It is filled;
		chest2.p2: The other chest contains scorpions

	chest1.p1 => chest1.p2
	chest2.p1 || chest2.p1

*/