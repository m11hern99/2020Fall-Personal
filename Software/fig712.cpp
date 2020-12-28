int m = 5;           // m is a global variable
void fg(int x)       // x is the parameter
{
   int y;            // y is a dynamic local variable
   y = 7;
   x = x + y + 2;
}
int main()
{
   fg(m);            // m is the argument
}
