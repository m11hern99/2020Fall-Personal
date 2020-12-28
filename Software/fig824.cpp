int table[3];
void tabfun(int t[])  // t is parameter
{
   t[2] = 5;
}
int main()
{
   tabfun(table);     // array table is an argument
}
