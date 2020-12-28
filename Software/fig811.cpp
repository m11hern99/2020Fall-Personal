#include <iostream>
using namespace std;

int x = 1;
void fol()              // fol with no parameters
{
   x = x + 1;
}
void fol(int n)         // fol with one int parameter
{
    x = x + n;
}
void fol(int n, int m)  // fol with two int parameters
{
    x = x + n + m;
}
int main()
{
   fol(10);             // calls 2nd fol function
   cout << x << endl;
   fol();               // calls 1st fol function
   cout << x << endl;
   fol(2, 3);           // calls 3rd fol function
   cout << x << endl;
}
