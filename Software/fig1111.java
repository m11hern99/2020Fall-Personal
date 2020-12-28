short reverseOrder(short x)
{
   int y = ((int) x) & 0xffff;  // promote with no sign ext
   return (short) (256 * (y%256) + y/256);
}
