int gv;
int fb(int t, int u, int v, int w, int x, int y, int z)
{
   return t + u + v + w + x  + y + z;
}
int main()
{
   gv = fb(1, 2, 3, 4, 5, 6, 7);
   return 0;
}
