#include <iostream>
using namespace std;

int y;
void putoff(int $x)
{
   x = x + 5;           // side effect is delayed
   cout << "y = " << y << endl;
}
void rightnow(int &x)
{
   x = x + 5;           // side effect is immediate
   cout << "y = " << y << endl;
}
int main()
{
   y = 1;
   putoff(y);
   y = 1;
   rightnow(y);
}
