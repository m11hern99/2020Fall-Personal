#include <iostream>
using namespace std;

int y = 1;
void fv(int x)
{
   x = x + 5;
}
void fr(int *p)
{
   *p = *p + 5;            // dereference pointer to access y
}
void fvr(int x, int *p)
{
   *p = x;
}
int main()
{
   fv(y);                  // call by value--pass value
   cout << "y = " << y << endl;
   fr(&y);                // call by reference--pass address
   cout << "y = " << y << endl;
   fvr(20, &y);           // call by value and reference
   cout << "y = " << y << endl;
}
